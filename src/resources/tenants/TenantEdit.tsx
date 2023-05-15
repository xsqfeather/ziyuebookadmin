import { RichTextInput } from "ra-input-rich-text";
import { Edit, SimpleForm, TextInput } from "react-admin";
import SingleIpfsImageInput from "../../components/inputs/SingleIpfsImageInput";
import { MyRichTextInputToolbar } from "../../components/MyRichTextInputToolbar";
import { UserSearchSelector } from "../../components/UserSearchSelector";

export function TenantEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <SingleIpfsImageInput source="logo" />
        <RichTextInput
          source="description"
          toolbar={<MyRichTextInputToolbar size={"large"} />}
        />
        <TextInput source="slogan" />
        <UserSearchSelector source="ownerId" isRequired />
      </SimpleForm>
    </Edit>
  );
}
