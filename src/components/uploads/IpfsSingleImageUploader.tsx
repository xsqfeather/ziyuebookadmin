import {
  CircularProgress,
  Dialog,
  IconButton,
  InputLabel,
  Paper,
  Stack,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useEffect, useState } from "react";
import { ImageOutlined, RemoveCircle } from "@mui/icons-material";

import { create } from "ipfs-http-client";

const client = create({
  url: "https://store2.wushiyingshi.cyou/api/v0",
});

export default function IpfsSingleImageUploader(props: {
  url: string;
  change: (url: string | null) => void;
  label: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [showOpen, setShowOpen] = useState(false);

  const { url, change, label } = props;

  useEffect(() => {
    if (url !== "") {
      setUploading(true);
      var img = new Image();
      img.src = url;
      img.onload = function () {
        console.log("载入完成啊啊啊");

        setUploading(false);
      };
    }
  }, [url]);

  const handleOnChange = async (e: any) => {
    const files = e.target.files;
    setUploading(true);
    try {
      const rlt = await client.add(files[0]);

      change("https://store2.wushiyingshi.cyou/ipfs/" + rlt.cid.toString());
    } catch (error: any) {
      console.log(error.message);
      setUploading(false);
      change(null);
    }
  };

  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent="space-between"
      width={"40vw"}
    >
      <InputLabel>{label}</InputLabel>
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
            url === "" && (
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
                  multiple={false}
                  onChange={handleOnChange}
                />
                <PhotoCamera
                  style={{
                    height: "60%",
                    width: "60%",
                  }}
                />
              </IconButton>
            )
          )}
          {url !== "" && !uploading && (
            <Paper
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${url})`,
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
                <IconButton>
                  <ImageOutlined
                    onClick={() => {
                      setShowOpen(true);
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    change(null);
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
        <img src={url} alt="" />
      </Dialog>
    </Stack>
  );
}
