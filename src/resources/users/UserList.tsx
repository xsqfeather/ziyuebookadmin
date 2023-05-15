import {
  Datagrid,
  ImageField,
  List,
  NumberField,
  TextField,
} from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="username" />
      <TextField source="email" />
      <ImageField source="avatar" />
      <NumberField source="consume" />
    </Datagrid>
  </List>
);
