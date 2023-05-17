import { Create, SimpleForm, TextInput } from "react-admin";

export default function ProductOnXianBannedCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="isbn" />
      </SimpleForm>
    </Create>
  );
}
