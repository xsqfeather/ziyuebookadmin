import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import SingleIpfsImageInput from "../../components/inputs/SingleIpfsImageInput";

export function ProductEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" />
        <SingleIpfsImageInput source="cover" />
        <ReferenceInput
          source="categoryId"
          reference="product_categories"
          perPage={100}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}
