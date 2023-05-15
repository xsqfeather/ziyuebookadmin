import { ImageList, ImageListItem } from "@mui/material";
import { useRecordContext } from "react-admin";

export const ImagesField = () => {
  const record = useRecordContext();
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {record.images.map((item: any) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={record.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
