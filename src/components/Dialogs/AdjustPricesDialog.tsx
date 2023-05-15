import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Button,
  InputAdornment,
  Box,
} from "@mui/material";
import {
  useListContext,
  useNotify,
  useRecordContext,
  useRefresh,
  useUnselectAll,
} from "react-admin";
import { useState } from "react";
import { publishManyToXian } from "../../services/dataProvider";

export default function AdjustPricesDialog(props: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSave?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}) {
  const { open, setOpen, onSave, onSuccess, onError } = props;
  const [rate, setRate] = useState(1.3);
  const [addPrice, setAddPrice] = useState(0);
  const { selectedIds } = useListContext();
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll("products");

  const handlePublish = async () => {
    try {
      if (onSave) {
        onSave();
      }
      const list = await publishManyToXian({
        productIds: selectedIds,
        rate,
        addPrice: addPrice * 100,
      });
      refresh();
      unselectAll();
      notify("已成功调价" + list.length + "本书");
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.log(error);
      notify("调价失败，请重试", {
        type: "error",
      });
      refresh();
      unselectAll();
      if (onError) {
        onError();
      }
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth="md"
      >
        <DialogTitle>调整价格</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              spacing={3}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                maxWidth: 760,
              }}
            >
              <Button
                variant={rate === 1 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1);
                }}
              >
                0%
              </Button>
              <Button
                variant={rate === 1.15 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.15);
                }}
              >
                15%
              </Button>
              <Button
                variant={rate === 1.2 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.2);
                }}
              >
                20%
              </Button>
              <Button
                variant={rate === 1.3 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.3);
                }}
              >
                30%
              </Button>
              <Button
                variant={rate === 1.4 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.4);
                }}
              >
                40%
              </Button>
              <Button
                variant={rate === 1.5 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.5);
                }}
              >
                50%
              </Button>
              <Button
                variant={rate === 1.6 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.6);
                }}
              >
                60%
              </Button>
              <Button
                variant={rate === 1.7 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.7);
                }}
              >
                70%
              </Button>
              <Button
                variant={rate === 1.8 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.8);
                }}
              >
                80%
              </Button>
              <Button
                variant={rate === 1.9 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.9);
                }}
              >
                90%
              </Button>
              <Button
                variant={rate === 2 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(2);
                }}
              >
                100%
              </Button>
              <Box
                sx={{
                  padding: 3,
                }}
              >
                <TextField
                  label="加价"
                  placeholder="调整价格可以是负数"
                  variant="outlined"
                  value={addPrice}
                  onChange={(e) => {
                    setAddPrice(+e.target.value);
                  }}
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">元</InputAdornment>
                    ),
                    startAdornment: (
                      <InputAdornment position="start">¥</InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            取消
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              handlePublish();
            }}
          >
            确认发布
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
