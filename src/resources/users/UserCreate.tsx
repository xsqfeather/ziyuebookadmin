import { Create, SimpleForm, TextInput } from "react-admin";

export function UserCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="password" />
        <TextInput source="password2" />
      </SimpleForm>
    </Create>
  );
}
