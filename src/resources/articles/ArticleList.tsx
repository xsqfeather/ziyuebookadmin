import {
  BooleanField,
  Datagrid,
  ImageField,
  List,
  TextField,
} from "react-admin";

export const ArticleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ImageField source="cover" />
      <TextField source="title" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
