import {
  CircularProgress,
  Dialog,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AddCircle, ImageOutlined, RemoveCircle } from "@mui/icons-material";

interface ImageType {
  cover: string;
  origin: string;
  thumb: string;
}

export default function SingleImageUploader(props: {
  file?: string | null;
  changeFiles: (files: File[]) => Promise<void>;
  remove: (store: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [showOpen, setShowOpen] = useState(false);

  const { file, changeFiles, remove } = props;

  console.log({ file });

  useEffect(() => {
    if (file !== "" && file) {
      setUploading(true);
      var img = new Image();
      img.src = file;
      img.onload = function () {
        setUploading(false);
      };
    }
  }, [file]);

  const handleOnChange = async (e: any) => {
    setUploading(true);
    const files: File[] = e.target.files;
    try {
      await changeFiles(files);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent="space-between"
      style={{
        marginBottom: 5,
      }}
    >
      <Paper
        style={{
          minWidth: 150,
          height: 150,
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          style={{
            height: "100%",
          }}
        >
          {uploading ? (
            <CircularProgress
              style={{
                display: "block",
              }}
            />
          ) : (
            (!file || file === "") && (
              <IconButton
                size="large"
                color="primary"
                aria-label="upload picture"
                component="label"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  multiple={true}
                  onChange={handleOnChange}
                />
                <AddCircle
                  style={{
                    height: "60%",
                    width: "60%",
                  }}
                />
              </IconButton>
            )
          )}
          {file && !uploading && (
            <Paper
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${file})`,
              }}
            >
              <Stack
                style={{
                  width: "100%",
                  position: "relative",
                  bottom: 0,
                  top: "70%",
                  zIndex: 100,
                  backgroundColor: "#8080803b",
                }}
                direction={"row"}
                justifyContent="space-around"
              >
                <IconButton
                  onClick={() => {
                    setShowOpen(true);
                  }}
                >
                  <ImageOutlined />
                </IconButton>
                <IconButton
                  onClick={() => {
                    remove(file as string);
                  }}
                >
                  <RemoveCircle />
                </IconButton>
              </Stack>
            </Paper>
          )}
        </Stack>
      </Paper>
      <Dialog
        onClose={() => {
          setShowOpen(false);
        }}
        open={showOpen}
      >
        <img src={file as string} alt="" />
      </Dialog>
    </Stack>
  );
}
