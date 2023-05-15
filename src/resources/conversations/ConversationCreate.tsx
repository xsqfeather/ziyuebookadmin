import { Create, SimpleForm, TextInput } from "react-admin";

export function ConversationCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="content" rows={4} />
      </SimpleForm>
    </Create>
  );
}
