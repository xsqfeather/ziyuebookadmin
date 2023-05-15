import { RichTextInput } from "ra-input-rich-text";
import { Create, SimpleForm, TextInput } from "react-admin";
import SingleIpfsImageInput from "../../components/inputs/SingleIpfsImageInput";
import { MyRichTextInputToolbar } from "../../components/MyRichTextInputToolbar";
import { UserSearchSelector } from "../../components/UserSearchSelector";

export function TenantCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <SingleIpfsImageInput source="logo" />
        <TextInput source="slogan" />
        <RichTextInput
          source="description"
          toolbar={<MyRichTextInputToolbar size={"large"} />}
        />
        <UserSearchSelector source="ownerId" isRequired />
      </SimpleForm>
    </Create>
  );
}
