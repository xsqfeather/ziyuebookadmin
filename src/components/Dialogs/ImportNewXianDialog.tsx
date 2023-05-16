import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ExcelIcon from "@mui/icons-material/DocumentScanner";
import { useState } from "react";
import { addProductsFromXianExcel } from "../../services/dataProvider";

export default function ImportNewXianDialog() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const handleImportClick = async () => {
    try {
      setUploading(true);
      const fileDto = new FormData();
      fileDto.append("file", file as any);
      await addProductsFromXianExcel(fileDto);
      setUploading(false);
      setOpen(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>把闲管家商品导入</DialogTitle>
        <DialogContent>
          {uploading ? (
            <Stack
              sx={{
                minWidth: 300,
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress />
              <Typography>正在导入</Typography>
            </Stack>
          ) : (
            <Stack
              direction={"row"}
              sx={{
                minWidth: 300,
              }}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Button
                sx={{ display: "block" }}
                variant="contained"
                component="label"
              >
                点击选择文件
                <input
                  hidden
                  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  multiple
                  type="file"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    console.log({ file });
                    setFile(file);
                  }}
                />
              </Button>
              <Typography display={"block"}>{file?.name}</Typography>
            </Stack>
          )}

          <Divider
            variant="fullWidth"
            orientation="horizontal"
            sx={{
              height: 20,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={() => {
              setOpen(false);
            }}
          >
            取消
          </Button>
          <Button
            color="primary"
            disabled={uploading}
            onClick={handleImportClick}
            variant="outlined"
          >
            确认导入
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        导入Excel
        <ExcelIcon />
      </Button>
    </>
  );
}
