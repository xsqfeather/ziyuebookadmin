import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Button,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { Button as AdminButton, useRecordContext } from "react-admin";
import AsyncIcon from "@mui/icons-material/Storage";
import { useEffect, useState } from "react";
import { XianProductCreateDto } from "../../types/xian.products.dto";
import ManyImageUploader from "../inputs/ManyImageUploader";
import { publishToXian } from "../../services/dataProvider";

export default function AsyncToXianDialog(props: {
  label: string;
  onSave?: () => void;
  onSuccess?: () => void;
}) {
  const { label, onSave, onSuccess } = props;
  const record = useRecordContext();
  const [open, setOpen] = useState(false);
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
          price: xianProduct.price,
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
        price: +record.xian?.price.toFixed(0) || +record.price.toFixed(0),
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
      >
        <DialogTitle>将【{record.title}】添加/更新到闲管家</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Select
              placeholder="选择分类"
              value={xianProduct.channel_cat_id}
              onChange={(e: any) => {
                setXianProduct({
                  ...xianProduct,
                  channel_cat_id: e.target.value,
                });
              }}
            >
              <MenuItem value="4c49139fe1b6ae4aac899d2620c5df2b">
                图书-童书育儿
              </MenuItem>
              <MenuItem value="7eb776b01814cc6e1921b9e373cead75">
                图书-学习考试
              </MenuItem>
              <MenuItem value="ab78823bfd3c7134b108d382c4e6ea42">
                图书-社科经管
              </MenuItem>
              <MenuItem value="c3c6e8d1d63c0618b108d382c4e6ea42">
                图书-文学小说
              </MenuItem>
            </Select>
            <TextField
              label="标题"
              value={xianProduct.title}
              onChange={(e: any) => {
                setXianProduct({ ...xianProduct, title: e.target.value });
              }}
            />

            <TextField
              label="闲鱼售价"
              value={xianProduct.price}
              type="number"
              onChange={(e: any) => {
                setXianProduct({ ...xianProduct, price: e.target.value });
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">分</InputAdornment>
                ),
              }}
            />
            <TextField
              label="描述"
              multiline
              rows={4}
              value={xianProduct.desc}
              onChange={(e: any) => {
                setXianProduct({ ...xianProduct, desc: e.target.value });
              }}
            />

            <ManyImageUploader
              label={"同步的图片"}
              images={xianProduct.images}
              changeUrls={function (files: string[]): void {
                setXianProduct({ ...xianProduct, images: files });
              }}
              removeUrl={function (fileToRemove: string): void {
                setXianProduct({
                  ...xianProduct,
                  images: xianProduct.images.filter(
                    (file) => file !== fileToRemove
                  ),
                });
              }}
              onReset={function (): void {
                setXianProduct({
                  ...xianProduct,
                  images: record.images,
                });
              }}
            />
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
      <AdminButton
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
        label={props.label}
        startIcon={<AsyncIcon />}
      />
    </>
  );
}
