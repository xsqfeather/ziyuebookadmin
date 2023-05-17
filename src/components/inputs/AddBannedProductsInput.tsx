import { Backdrop, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import {
  addXianBannedBooks,
  publishRecordsToXian,
} from "../../services/dataProvider";
import {
  useListContext,
  useNotify,
  useRefresh,
  useUnselectAll,
} from "react-admin";

export default function AddBannedProductsInput(props: { resource?: string }) {
  const [loading, setLoading] = useState(false);
  const { selectedIds } = useListContext();
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll(props.resource || "products");
  const handleBulkPutProductsToXian = async () => {
    try {
      setLoading(true);
      await addXianBannedBooks({ productIds: selectedIds });
      setLoading(false);
      refresh();
      unselectAll();
      notify(selectedIds.length + "本书已经加入违禁");
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
        color="error"
        onClick={handleBulkPutProductsToXian}
      >
        添加到闲鱼违禁书库
      </Button>
    </>
  );
}
