import { useState } from "react";
import AdjustPricesDialog from "../Dialogs/AdjustPricesDialog";
import { Backdrop, Button, CircularProgress, Typography } from "@mui/material";

export default function AdjustPricesDialogInput(props: {
  label: string;
  onSave?: () => void;
  onSuccess?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <AdjustPricesDialog
        open={open}
        setOpen={setOpen}
        onSave={() => {
          setLoading(true);
        }}
        onSuccess={() => {
          setLoading(false);
        }}
        onError={() => {
          setLoading(false);
        }}
      />
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
        color="primary"
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        {props.label}
      </Button>
    </>
  );
}
