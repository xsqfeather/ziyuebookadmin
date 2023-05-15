import {
  InputProps,
  useInput,
  useResourceContext,
  useTranslate,
} from "react-admin";
import { useFormContext } from "react-hook-form";
import ManyImageUploader from "./ManyImageUploader";
import { Box } from "@mui/system";

export default function SingleImageInput(props: InputProps) {
  const resource = useResourceContext();
  const input = useInput(props);

  const translate = useTranslate();
  const label = translate(`resources.${resource}.fields.${props.source}`);

  const { setValue } = useFormContext();

  const banners: string[] = input.field.value || [];

  const { field } = useInput({
    ...props,
  });

  return (
    <Box>
      <ManyImageUploader
        images={banners}
        label={label}
        changeUrls={(images: string[]) => {
          console.log({ images });
          setValue(props.source, [...banners, ...images]);
        }}
        removeUrl={function (image: string): void {
          const urlsState = banners.filter((banner) => banner !== image);
          setValue(props.source, urlsState);
          if (props.onChange) {
            props.onChange(urlsState as any);
            field.onChange(urlsState);
          }
        }}
        onReset={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Box>
  );
}
