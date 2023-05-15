import {
  AutocompleteInput,
  InputProps,
  ReferenceInput,
  useRecordContext,
} from "react-admin";

import Stack from "@mui/material/Stack";

const filterToQuery = (searchText: string) => ({ q: searchText });
const inputText = (choice: any) => `${choice.username}`;
let count = 0;

const matchSuggestion = (filter: any, choice: any) => {
  return (
    choice.nickname?.toLowerCase().includes(filter.toLowerCase()) ||
    choice.mobile?.toLowerCase().includes(filter.toLowerCase()) ||
    "没有找到"
  );
};

const OptionRenderer = () => {
  const record = useRecordContext();
  console.log(count++, { record });
  if (!record) return <span>没有找到相关用户</span>;
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <img width={100} src={record.avatar} />
      <span>{record.username}</span>
    </Stack>
  );
};

export const UserSearchSelector = (props: InputProps) => {
  const { source = "userId", isRequired } = props;
  return (
    <ReferenceInput
      isRequired={isRequired}
      source={source}
      reference="users"
      perPage={50}
      emp
    >
      <AutocompleteInput
        isRequired={isRequired}
        fullWidth
        suggestionLimit={50}
        filterToQuery={filterToQuery}
        inputText={inputText}
        optionText={<OptionRenderer />}
        renderOption={(choice) => <OptionRenderer />}
        matchSuggestion={matchSuggestion}
      />
    </ReferenceInput>
  );
};
