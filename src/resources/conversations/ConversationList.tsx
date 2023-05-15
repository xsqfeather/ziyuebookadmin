import { Button } from "@mui/material";
import { useState } from "react";
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  ReferenceField,
  TextField,
  useRefresh,
} from "react-admin";
import { ConversationDialog } from "./ConversationDialog";

export const ConversationList = () => {
  const refresh = useRefresh();
  const [open, setOpen] = useState(false);
  const [conversationId, setConversationId] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const handleLookUpMessages = (record: any) => {
    setMessages([...record.messages]);
    setConversationId(record.id);
    setOpen(true);
  };
  return (
    <List
      sort={{
        field: "createdAt",
        order: "DESC",
      }}
    >
      <ConversationDialog
        open={open}
        setOpen={setOpen}
        messages={messages}
        setMessages={setMessages}
        conversationId={conversationId}
        onAnswered={() => {
          refresh();
        }}
      />
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <TextField source="content" />
        <TextField source="wordsLength" />
        <TextField source="consume" />
        <TextField source="status" />
        <ReferenceField source="userId" reference="users">
          <TextField source="username" />
        </ReferenceField>

        <DateField source="createdAt" />

        <FunctionField
          label="查看对话"
          render={function (record?: any, source?: string | undefined) {
            return (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLookUpMessages(record);
                }}
              >
                查看对话
              </Button>
            );
          }}
        />
      </Datagrid>
    </List>
  );
};
