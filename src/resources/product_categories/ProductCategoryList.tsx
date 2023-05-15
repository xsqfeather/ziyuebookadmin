import { Datagrid, DateField, List, TextField } from "react-admin";

export const ProductCategoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
