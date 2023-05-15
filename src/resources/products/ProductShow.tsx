import {
  EditButton,
  Button,
  FunctionField,
  ListButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  ImageField,
  RichTextField,
} from "react-admin";

import PriceIcon from "@mui/icons-material/PriceChange";
import AsyncIcon from "@mui/icons-material/Storage";
import { ImagesField } from "../../components/inputs/ImagesField";

const ProductShowActions = () => (
  <TopToolbar>
    <EditButton />
    <ListButton />
    {/* Add your custom actions */}
    <Button
      color="primary"
      onClick={() => {}}
      label="调价"
      startIcon={<PriceIcon />}
    />
    <Button
      color="primary"
      onClick={() => {}}
      label="更新闲管家"
      startIcon={<AsyncIcon />}
    />
  </TopToolbar>
);

export function ProductShow() {
  return (
    <Show actions={<ProductShowActions />}>
      <SimpleShowLayout>
        <ImageField source="cover" />
        <TextField source="title" />
        <FunctionField
          source="price"
          label="当前闲鱼售价"
          render={function (record?: any, source?: any) {
            return <span>¥{(record[source] / 100 || 0).toFixed(2)}</span>;
          }}
        />
        <FunctionField
          label="上次孔网最低售价"
          source="bookData.price"
          render={function (record?: any, source?: string | undefined) {
            const sources = source?.split(".") || [];
            const bookDataObj = record[sources[0]] || {};

            return (
              <span>¥{(bookDataObj[sources[1]] / 100 || 0).toFixed(2)}</span>
            );
          }}
        />
        <FunctionField
          label="最新空碗最低售价"
          source="bookData.newPrice"
          render={function (record?: any, source?: string | undefined) {
            const sources = source?.split(".") || [];
            const bookDataObj = record[sources[0]] || {};

            return (
              <span>¥{(bookDataObj[sources[1]] / 100 || 0).toFixed(2)}</span>
            );
          }}
        />
        <FunctionField
          source="profitRate"
          render={function (record?: any, source?: any) {
            return <span>{(record[source] * 100).toFixed(2)}%</span>;
          }}
        />
        <RichTextField source="bookData.contentIntro" />
        <RichTextField source="bookData.authorIntro" />
        <RichTextField source="bookData.catalog" />
        <ImagesField />
      </SimpleShowLayout>
    </Show>
  );
}
