import {
  Datagrid,
  DateField,
  EditButton,
  FilterButton,
  FunctionField,
  ImageField,
  List,
  SearchInput,
  SelectInput,
  TextField,
  TopToolbar,
  Link,
  useResourceContext,
  useRefresh,
  BulkDeleteButton,
} from "react-admin";

import {
  Backdrop,
  CircularProgress,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import CategorySelectorInput from "../../components/inputs/CategorySelectorInput";
import { useState } from "react";
import AsyncToXianDialog from "../../components/Dialogs/AsyncToXianDialog";
import AdjustPriceDialogInput from "../../components/inputs/AdjustPriceDialogInput";
import AdjustPricesDialogInput from "../../components/inputs/AdjustPricesDialogInput";
import PutProductsToXianInput from "../../components/inputs/PutProductsToXianInput";

const XianProductStatusText: any = {
  "-1": "待售后",
  "10": "草稿箱",
  "21": "待发布",
  "22": "销售中",
  "23": "已售罄",
  "31": "手动下架",
  "32": "服务商下架",
  "36": "自动下架",
};

const ProductBulkActionButtons = () => (
  <>
    <AdjustPricesDialogInput label="批量调价" />
    <PutProductsToXianInput />
    <Button
      variant="contained"
      color="error"
      onClick={() => {
        console.log("敬请期待");
      }}
    >
      移动到违禁书库
    </Button>
  </>
);

const ProductListActions = () => {
  return (
    <TopToolbar>
      <FilterButton />
    </TopToolbar>
  );
};

const productFilters = [
  <SearchInput source="q" alwaysOn placeholder="ISBN|书名|分类" />,
  <SelectInput
    label="有价格更新"
    source="needToAdjustLatestPrice"
    choices={[
      { id: true, name: "是" },
      { id: false, name: "否" },
    ]}
  />,
  <SelectInput
    label="是否在闲管家"
    source="onXian"
    choices={[
      { id: true, name: "是" },
      { id: false, name: "否" },
    ]}
  />,
  <SelectInput
    label="闲管家状态"
    source="xian_product_status"
    choices={Object.keys(XianProductStatusText).map((key) => ({
      id: key,
      name: XianProductStatusText[key],
    }))}
  />,
  <CategorySelectorInput source={"categoryId"} />,
];

export const ProductList = () => {
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  return (
    <>
      <Backdrop
        open={open}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
        <Typography variant="h6" component="div" sx={{ ml: 2 }}>
          加载中...
        </Typography>
      </Backdrop>
      <List actions={<ProductListActions />} filters={productFilters}>
        <Datagrid bulkActionButtons={<ProductBulkActionButtons />}>
          <ImageField source="cover" />
          <FunctionField
            source="title"
            render={function (record: any, source: any) {
              const resource = useResourceContext();
              return (
                <Link to={`/${resource}/${record.id}/show`}>
                  {record[source]}
                </Link>
              );
            }}
          />
          <TextField source="category" />
          <TextField source="bookData.isbn" />

          <FunctionField
            source="price"
            render={function (record?: any, source?: any) {
              return <span>¥{(record[source] / 100 || 0).toFixed(2)}</span>;
            }}
          />
          <FunctionField
            source="bookData.newPrice"
            render={function (record?: any, source?: any) {
              const sources = source.split(".");
              const bookDataObj = record[sources[0]] || {};

              return (
                <div>
                  <span>
                    ¥{(bookDataObj[sources[1]] / 100 || 0).toFixed(2)}
                  </span>
                  <br />
                  {record["buyUrlOnKong"] && (
                    <a target="_blank" href={record["buyUrlOnKong"]}>
                      购买链接
                    </a>
                  )}
                </div>
              );
            }}
          />

          <FunctionField
            source="profitRate"
            render={function (record?: any, source?: any) {
              return <span>{(record[source] * 100).toFixed(2)}%</span>;
            }}
          />

          <FunctionField
            source="xian.product_status"
            render={function (record?: any, source?: any) {
              const sources = source.split(".");
              const xianObj = record[sources[0]] || {};
              const statusKey = xianObj[sources[1]] || 37;
              return (
                <Stack
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  direction={"row"}
                >
                  <Typography variant="body2" component={"div"}>
                    {XianProductStatusText[statusKey.toString()] || "未添加"}
                  </Typography>
                </Stack>
              );
            }}
          />
          <DateField source="updatedAt" showTime />

          <AdjustPriceDialogInput
            onSave={() => {
              setOpen(true);
            }}
            onSuccess={() => {
              setOpen(false);
              refresh();
            }}
            label={"调价"}
          />
          <AsyncToXianDialog
            label={"发布"}
            onSave={() => {
              setOpen(true);
            }}
            onSuccess={() => {
              setOpen(false);
              refresh();
            }}
          />
          <EditButton label="编辑" />
        </Datagrid>
      </List>
    </>
  );
};
