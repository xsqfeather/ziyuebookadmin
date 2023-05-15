import { RichTextInput } from "ra-input-rich-text";
import { Create, SimpleForm, TextInput } from "react-admin";
import SingleIpfsImageInput from "../../components/inputs/SingleIpfsImageInput";
import { MyRichTextInputToolbar } from "../../components/MyRichTextInputToolbar";

export function ArticleCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <SingleIpfsImageInput source="cover" />
        <TextInput source="description" multiline rows={3} />
        <RichTextInput
          source="content"
          toolbar={<MyRichTextInputToolbar size={"large"} />}
        />
      </SimpleForm>
    </Create>
  );
}
