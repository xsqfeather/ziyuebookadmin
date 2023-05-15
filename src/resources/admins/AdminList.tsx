import {
  BooleanField,
  Datagrid,
  ImageField,
  List,
  NumberField,
  TextField,
} from "react-admin";

export const AdminList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="username" />
      <ImageField source="avatar.cover" />
      <BooleanField source="root" />
    </Datagrid>
  </List>
);
