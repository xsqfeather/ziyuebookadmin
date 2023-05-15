import { RichTextInput } from "ra-input-rich-text";
import {
  ArrayInput,
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";
import SingleIpfsImageInput from "../../components/inputs/SingleIpfsImageInput";
import { MyRichTextInputToolbar } from "../../components/MyRichTextInputToolbar";

export function AvPostCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" fullWidth />
        <SingleIpfsImageInput source="cover" />
        <TextInput fullWidth source="description" multiline rows={3} />
        <RichTextInput
          fullWidth
          source="content"
          gridRow={{ xs: 2, sm: 1 }}
          height={400}
          rowGap={20}
          toolbar={<MyRichTextInputToolbar size={"large"} />}
        />
        <ArrayInput source="tags" fullWidth>
          <SimpleFormIterator fullWidth>
            <TextInput source="name" required fullWidth />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}
