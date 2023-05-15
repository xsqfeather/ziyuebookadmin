import {
  CircularProgress,
  IconButton,
  InputLabel,
  Paper,
  Stack,
} from "@mui/material";
import { AdminHttpClient } from "../../services/adminDataProvider";
import ManyImageUploaderItem from "./ManyImageUploaderItem";
import { ResetTv } from "@mui/icons-material";

export default function ManyImageUploader(props: {
  images: string[];
  changeUrls: (files: string[]) => void;
  removeUrl: (fileToRemove: string) => void;
  label: string;
  onReset: () => void;
}) {
  const { label, removeUrl, images, changeUrls, onReset } = props;

  const changeFile = async (file: File) => {
    const fileData = new FormData();
    fileData.append("file", file);
    try {
      const rlt = await AdminHttpClient(
        `${import.meta.env.VITE_API_URL}/uploads`,
        {
          method: "POST",
          body: fileData,
        }
      );
      return rlt.json?.url;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Stack
      direction={"column"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction={"row"} alignItems={"center"}>
        <InputLabel>{label}</InputLabel>{" "}
        <IconButton onClick={onReset}>
          <ResetTv />
        </IconButton>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent="space-around"
        spacing={4}
        flexWrap={"wrap"}
        style={{
          padding: 10,
        }}
      >
        {images?.map((store: string, index: number) => (
          <ManyImageUploaderItem
            key={index}
            file={store}
            changeFiles={async (files: File[]) => {
              for (let index = 0; index < files.length; index++) {
                const file = files[index];
                await changeFile(file);
              }
            }}
            remove={function (file: string): void {
              removeUrl(file);
            }}
          />
        ))}
        <ManyImageUploaderItem
          file={null}
          changeFiles={async (files: File[]) => {
            const newUrls = [];

            for (let index = 0; index < files.length; index++) {
              const file = files[index];
              const url = await changeFile(file);
              newUrls.push(url);
            }
            changeUrls([...images, ...newUrls]);
          }}
          remove={function (file): void {
            removeUrl(file);
          }}
        />
      </Stack>
    </Stack>
  );
}
