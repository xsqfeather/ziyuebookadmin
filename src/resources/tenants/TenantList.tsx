import {
  BooleanField,
  Datagrid,
  ImageField,
  List,
  TextField,
} from "react-admin";

export const TenantList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="slogan" />
      <ImageField source="logo" />
    </Datagrid>
  </List>
);
