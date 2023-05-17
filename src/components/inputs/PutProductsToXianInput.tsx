import { Backdrop, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { publishRecordsToXian } from "../../services/dataProvider";
import {
  useListContext,
  useNotify,
  useRefresh,
  useUnselectAll,
} from "react-admin";

export default function PutProductsToXianInput(props: { resource?: string }) {
  const [loading, setLoading] = useState(false);
  const { selectedIds } = useListContext();
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll(props.resource || "products");
  const handleBulkPutProductsToXian = async () => {
    try {
      setLoading(true);
      await publishRecordsToXian({ productIds: selectedIds });
      setLoading(false);
      refresh();
      unselectAll();
      notify(selectedIds.length + "本书已经加入发布队列");
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      unselectAll();
      notify("发布失败，请重试", error.message);
    }
  };
  return (
    <>
      <Backdrop
        open={loading}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
      >
        <CircularProgress color="inherit" />
        <Typography variant="h6" component="div" sx={{ ml: 2 }}>
          加载中...
        </Typography>
      </Backdrop>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBulkPutProductsToXian}
      >
        发布到闲管家
      </Button>
    </>
  );
}
