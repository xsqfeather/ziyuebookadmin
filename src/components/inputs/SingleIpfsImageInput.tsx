import {
  InputProps,
  useInput,
  useResourceContext,
  useTranslate,
} from "react-admin";
import { useFormContext } from "react-hook-form";
import IpfsSingleImageUploader from "../uploads/IpfsSingleImageUploader";

export default function SingleIpfsImageInput(props: InputProps) {
  const resource = useResourceContext();
  const input = useInput(props);

  const translate = useTranslate();
  const label = translate(`resources.${resource}.fields.${props.source}`);

  const { setValue } = useFormContext();

  const { field } = useInput({
    ...props,
  });

  return (
    <IpfsSingleImageUploader
      url={input.field.value || ""}
      label={label}
      change={function (cid): void {
        setValue(props.source, cid);
        field.onChange(cid);
      }}
    />
  );
}
