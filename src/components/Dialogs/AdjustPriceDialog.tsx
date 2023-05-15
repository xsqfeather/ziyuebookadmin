import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Button,
  InputAdornment,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { useRecordContext } from "react-admin";
import { useEffect, useState } from "react";
import { XianProductCreateDto } from "../../types/xian.products.dto";

export default function AsyncToXianDialog(props: {
  open: boolean;
  setOpen: (open: boolean) => void;
  publishToXian: (data: any) => Promise<void>;
  onSave?: () => void;
  onSuccess?: () => void;
}) {
  const { onSave, onSuccess, open, setOpen, publishToXian } = props;
  const record = useRecordContext();
  const [rate, setRate] = useState(1.3);
  const [addPrice, setAddPrice] = useState(0);

  const [xianProduct, setXianProduct] = useState<XianProductCreateDto>({
    title: "",
    channel_cat_id: "",
    desc: "",
    district_id: 0,
    images: [],
    item_biz_type: 0,
    price: 0,
    sp_biz_type: 0,
    stock: 99,
  });

  const handlePublish = async () => {
    try {
      if (onSave) {
        onSave();
      }
      await publishToXian({
        productId: record.id,
        xianInfo: {
          title: xianProduct.title,
          channel_cat_id: xianProduct.channel_cat_id,
          desc: xianProduct.desc,
          images: xianProduct.images,
          price: xianProduct?.price,
        },
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (record) {
      setXianProduct({
        title: record.xian?.title || "【正版二手】" + record.title,
        channel_cat_id:
          record.xian?.channel_cat_id || "7eb776b01814cc6e1921b9e373cead75",
        desc:
          record.xian?.desc ||
          "✅经营十多年的实体商家，本店均为正版二手，盗版全额退款。二手书利润低不讲价，可以拍就有货，直接拍。\n\n✅八五新左右，笔记不可避免，择优发货，都紫外线酒精消毒过，放心使用！非偏远地方包邮\n\n✅快速发货，一般48小时内，多仓库发货，快递不指定！\n\n✅二手产品不接受无理由退货，个人原因引起的退货/改地址都另收6元/单！\n\n😘最后祝各位学子金榜题名，永不挂科。",
        district_id: record.xian?.district_id || 510116,
        images:
          record.xian?.images ||
          (record.images.length === 0 ? [record.cover] : record.images),
        item_biz_type: record.xian?.item_biz_type || 2,
        price: record.bookData.newPrice * rate,
        sp_biz_type: record.xian?.sp_biz_type || 24,
        stock: record.xian?.stock || 99,
      });
    }
  }, [record]);
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth="md"
      >
        <DialogTitle>调整【{record.bookData.isbn}】价格</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Typography>
              当前价格： {(record?.price / 100)?.toFixed(2)}分
            </Typography>
            <Typography>
              当前孔网最低价： ¥{(record.bookData?.newPrice / 100)?.toFixed(2)}
              元
            </Typography>
            <Typography>
              上次获取的孔网最低价：{" "}
              {(record.bookData?.price / 100)?.toFixed(2)}分
            </Typography>
            <Divider>调整价格</Divider>
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
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(record.bookData?.newPrice * 1 + addPrice),
                  });
                }}
              >
                0%
              </Button>
              <Button
                variant={rate === 1.15 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.15);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.15 + addPrice
                    ),
                  });
                }}
              >
                15%
              </Button>
              <Button
                variant={rate === 1.2 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.2);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.2 + addPrice
                    ),
                  });
                }}
              >
                20%
              </Button>
              <Button
                variant={rate === 1.3 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.3);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.3 + addPrice
                    ),
                  });
                }}
              >
                30%
              </Button>
              <Button
                variant={rate === 1.4 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.4);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.4 + addPrice
                    ),
                  });
                }}
              >
                40%
              </Button>
              <Button
                variant={rate === 1.5 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.5);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.5 + addPrice
                    ),
                  });
                }}
              >
                50%
              </Button>
              <Button
                variant={rate === 1.6 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.6);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.6 + addPrice
                    ),
                  });
                }}
              >
                60%
              </Button>
              <Button
                variant={rate === 1.7 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.7);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.7 + addPrice
                    ),
                  });
                }}
              >
                70%
              </Button>
              <Button
                variant={rate === 1.8 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.8);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.8 + addPrice
                    ),
                  });
                }}
              >
                80%
              </Button>
              <Button
                variant={rate === 1.9 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(1.9);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(
                      record.bookData?.newPrice * 1.9 + addPrice
                    ),
                  });
                }}
              >
                90%
              </Button>
              <Button
                variant={rate === 2 ? "contained" : "outlined"}
                onClick={() => {
                  setRate(2);
                  setXianProduct({
                    ...xianProduct,
                    price: Math.round(record.bookData?.newPrice * 2 + addPrice),
                  });
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
                    setXianProduct({
                      ...xianProduct,
                      price: Math.round(
                        record.bookData?.newPrice * rate + +e.target.value * 100
                      ),
                    });
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
            <Divider>最终价格</Divider>
            <Typography
              variant="h4"
              sx={{
                color: "red",
                textAlign: "center",
              }}
            >
              ¥{(xianProduct.price / 100).toFixed(2)}
            </Typography>
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
