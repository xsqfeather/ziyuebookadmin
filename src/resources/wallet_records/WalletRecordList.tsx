import {
  BooleanField,
  Datagrid,
  DateField,
  ImageField,
  List,
  TextField,
} from "react-admin";

export const WalletRecordList = () => (
  <List
    sort={{
      field: "createdAt",
      order: "DESC",
    }}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="amount" />
      <TextField source="type" />
      <TextField source="walletType" />
      <TextField source="note" />
      <DateField source="createdAt" showTime />
    </Datagrid>
  </List>
);
