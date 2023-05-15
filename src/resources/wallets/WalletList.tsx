import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { ReactElement, useState } from "react";
import {
  Datagrid,
  FunctionField,
  ImageField,
  List,
  ListProps,
  TextField,
  useDataProvider,
  useNotify,
  useRefresh,
} from "react-admin";

export const WalletList = (props: ListProps): ReactElement => {
  const dataProvider = useDataProvider();
  const refresh = useRefresh();
  const notify = useNotify();
  const [chargeOpen, setChargeOpen] = useState(false);
  const [charging, setCharging] = useState(false);
  const [amount, setAmount] = useState(100);
  const [chargeRecord, setChargeRecord] = useState<any>({});
  const handleCharge = (e: any, record: any) => {
    e.stopPropagation();
    console.log("充值");
    setChargeOpen(true);
    setChargeRecord(record);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("提交充值");
    setChargeOpen(false);
    setCharging(true);
    try {
      await dataProvider.create("wallet_records", {
        data: {
          walletId: chargeRecord.id,
          walletType: chargeRecord.type,
          tenantId: chargeRecord.tenantId,
          tenantName: chargeRecord.tenantName,
          amount: amount,
          type: "earn",
          sourceType: "charge",
          note: "管理员充值",
        },
      });
      setCharging(false);
      notify("充值成功", {
        type: "success",
      });
      refresh();
    } catch (error: any) {
      console.error(error);
      console.log(error.message);
      notify("充值失败, 网络错误", {
        type: "error",
      });
      setCharging(false);
    }
  };
  return (
    <List
      {...props}
      sort={{
        field: "createdAt",
        order: "DESC",
      }}
      filter={{
        type: "tenant",
      }}
    >
      <Datagrid>
        <TextField source="tenantName" />
        <TextField source="balance" />
        <FunctionField
          label="充值"
          render={function (record?: any, source?: string | undefined) {
            return (
              <Button onClick={(e) => handleCharge(e, record)}>充值</Button>
            );
          }}
        />
      </Datagrid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={charging}
      >
        正在充值
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog
        maxWidth="md"
        open={chargeOpen}
        onClose={() => {
          setChargeOpen(false);
        }}
      >
        <DialogTitle>为{chargeRecord.tenantName}的账户充值：</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Stack
              direction={"row"}
              alignContent="space-around"
              alignItems={"center"}
              sx={{
                width: "100%",
              }}
            >
              <Typography>¥&nbsp;</Typography>
              <InputBase
                value={amount}
                onChange={(e: any) => {
                  setAmount(e.target.value);
                }}
                inputProps={{
                  min: 10,
                  max: 100000,
                }}
                type="number"
                placeholder="输入充值金额"
              />
              <Typography>元</Typography>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setChargeOpen(false);
                setTimeout(() => {
                  setChargeRecord({});
                  setAmount(100);
                }, 100);
              }}
            >
              取消
            </Button>
            <Button type="submit">确定</Button>
          </DialogActions>
        </form>
      </Dialog>
    </List>
  );
};
