import { Datagrid, DateField, ImageField, List, TextField } from "react-admin";

export const AIModelList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="owned_by" />
      <TextField source="object" />
    </Datagrid>
  </List>
);
