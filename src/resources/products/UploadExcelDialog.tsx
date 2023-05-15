import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import React from "react";
import { putProductsFromExcel } from "../../services/dataProvider";

export default function UploadExcelDialog(props: {
  open: boolean;
  onClose: () => void;
}) {
  const { open, onClose } = props;
  const [file, setFile] = React.useState<File | null>(null);
  const [uid, setUid] = React.useState<string>("");
  const [uploading, setUploading] = React.useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    try {
      setUploading(true);
      if (file) {
        const formData = new FormData();
        const uid = nanoid();
        setUid(uid);
        formData.append("uid", uid);
        formData.append("file", file);
        await putProductsFromExcel(formData);
        setUploading(false);
      }
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  return (
    <Dialog open={open} maxWidth="md">
      <DialogTitle>导入产品excel</DialogTitle>
      <DialogContent>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={uploading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <form onSubmit={handleUpload}>
          <Stack>
            <Grid
              wrap="nowrap"
              container
              alignItems={"center"}
              justifyContent={"space-around"}
              sx={{
                minWidth: "40vw",
              }}
            >
              <Grid item>
                <Button
                  disabled={uploading}
                  variant="contained"
                  component="label"
                >
                  选择文件...
                  <input
                    hidden
                    onChange={handleFileChange}
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    multiple={false}
                    type="file"
                  />
                </Button>
              </Grid>
              <Grid item>
                <Typography>{file ? file.name : "请上传你的EXCEL"}</Typography>
              </Grid>
            </Grid>
            <br />
            <br />
            <Divider />
            <Grid container>
              <Button
                disabled={uploading}
                fullWidth
                variant="contained"
                type="submit"
              >
                上传并导入
              </Button>
            </Grid>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>取消</Button>
      </DialogActions>
    </Dialog>
  );
}
