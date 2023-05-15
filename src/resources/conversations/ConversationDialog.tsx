import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  Backdrop,
  CircularProgress,
  Stack,
  Box,
  Typography,
  Paper,
  InputAdornment,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";

export function ConversationDialog(props: {
  open: boolean;
  setOpen: (open: boolean) => void;
  messages: any[];
  setMessages: (messages: any[]) => void;
  onAnswered: () => void;
  conversationId?: string;
}) {
  const { open, setOpen, messages, setMessages, conversationId, onAnswered } =
    props;
  const [newMsg, setNewMsg] = useState("");
  const [sending, setSending] = useState(false);
  const messageRef = useRef<any>();
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>查看对话</DialogTitle>
      <DialogContent
        sx={{
          overflow: "hidden",
        }}
      >
        <Stack justifyContent="space-between">
          <Box
            ref={messageRef}
            sx={{
              height: "75vh",
              overflowY: "auto",
            }}
          >
            {messages.map((message) => (
              <div>
                {message.role === "user" && (
                  <Typography variant="caption" color="text.secondary">
                    用户:
                  </Typography>
                )}
                {message.role === "assistant" && (
                  <Typography variant="caption" color="text.secondary">
                    助理:
                  </Typography>
                )}
                <Paper sx={{ padding: 2 }}>{message.content}</Paper>
              </div>
            ))}
          </Box>
          <TextField
            fullWidth
            disabled={sending}
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            variant="outlined"
            sx={{
              position: "relative",
              bottom: 0,
              height: "20vh",
            }}
            placeholder="输入新问题"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    disabled={sending}
                    onClick={async () => {
                      setSending(true);
                      setMessages([
                        ...messages,
                        {
                          role: "user",
                          content: newMsg,
                        },
                        {
                          role: "assistant",
                          content: "正在回复...",
                        },
                      ]);
                      setTimeout(() => {
                        messageRef.current?.scrollTo({
                          top: messageRef.current?.scrollHeight,
                          behavior: "smooth",
                        });
                      }, 1000);
                      try {
                        const token =
                          window.localStorage.getItem("admin_token");
                        axios.defaults.headers.common["authorization"] =
                          token?.toString();
                        const { data } = await axios.post(
                          `${
                            import.meta.env.VITE_API_URL
                          }/conversations/${conversationId}/messages`,
                          {
                            content: newMsg,
                          }
                        );
                        setMessages([...data.messages]);
                        onAnswered();
                        setTimeout(() => {
                          messageRef.current?.scrollTo({
                            top: messageRef.current?.scrollHeight,
                            behavior: "smooth",
                          });
                        }, 500);
                      } catch (error) {
                        console.error(error);
                        setSending(false);
                      }
                      setNewMsg("");
                      setSending(false);
                    }}
                  >
                    发送
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
