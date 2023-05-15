import { Button as AdminButton } from "react-admin";
import { useState } from "react";
import { publishToXian } from "../../services/dataProvider";

import PriceIcon from "@mui/icons-material/PriceChange";
import AdjustPriceDialog from "../Dialogs/AdjustPriceDialog";

export default function AdjustPriceDialogInput(props: {
  label: string;
  onSave?: () => void;
  onSuccess?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdjustPriceDialog
        open={open}
        onSave={props.onSave}
        publishToXian={publishToXian}
        onSuccess={props.onSuccess}
        setOpen={setOpen}
      />
      <AdminButton
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
        label={props.label}
        startIcon={<PriceIcon />}
      />
    </>
  );
}
