import {
  InputProps,
  useGetList,
  useInput,
  useResourceContext,
  useTranslate,
} from "react-admin";
import { useFormContext } from "react-hook-form";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";

export default function CategorySelectorInput(props: InputProps) {
  const resource = useResourceContext();
  const input = useInput(props);

  const translate = useTranslate();
  const label = translate(`resources.${resource}.fields.${props.source}`);

  const { setValue } = useFormContext();

  const { field } = useInput({
    ...props,
  });

  const { data: superCates } = useGetList("product_categories", {
    pagination: {
      page: 1,
      perPage: 100,
    },
    filter: {
      superCategoryId: null,
    },
  });
  const [currentCateId, setCurrentCateId] = React.useState("");
  const handleChange = (event: any) => {
    setCurrentCateId(event.target.value as string);
    if (event.target.value !== "") {
      setValue(props.source, event.target.value);
      field.onChange(event.target.value);
    }
  };

  const { data: childCates } = useGetList("product_categories", {
    pagination: {
      page: 1,
      perPage: 100,
    },
    filter: {
      superCategoryId: superCates ? superCates[0]?.id : null,
    },
  });

  const [currentChildCateId, setCurrentChildCateId] = React.useState("");
  const handleChildChange = (event: any) => {
    setCurrentChildCateId(event.target.value as string);
    if (event.target.value !== "") {
      setValue(props.source, event.target.value);
      field.onChange(event.target.value);
    } else {
      setValue(props.source, currentCateId);
      field.onChange(currentCateId);
    }
  };

  return (
    <Stack>
      <Typography>分类筛选</Typography>
      <Stack direction={"row"}>
        <Select
          size="small"
          sx={{
            width: 200,
          }}
          displayEmpty
          value={currentCateId}
          onChange={handleChange}
        >
          <MenuItem value={""}>全部</MenuItem>
          {superCates?.map((cate) => {
            return (
              <MenuItem key={cate.id} value={cate.id}>
                {cate.name}
              </MenuItem>
            );
          })}
        </Select>
        {currentCateId !== "" && (
          <Select
            size="small"
            sx={{
              width: 200,
            }}
            displayEmpty
            value={currentChildCateId}
            onChange={handleChildChange}
          >
            <MenuItem value={""}>全部</MenuItem>
            {childCates?.map((cate) => {
              return (
                <MenuItem key={cate.id} value={cate.id}>
                  {cate.name}
                </MenuItem>
              );
            })}
          </Select>
        )}
      </Stack>
    </Stack>
  );
}
