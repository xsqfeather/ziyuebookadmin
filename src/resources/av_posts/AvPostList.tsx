import { Datagrid, ImageField, List, TextField } from "react-admin";

export const AvPostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ImageField source="cover" />
      <TextField source="title" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
