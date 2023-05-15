import { ReactElement } from "react";
import { Create, CreateProps } from "react-admin";

export const WalletCreate = (props: CreateProps): ReactElement => (
  <Create {...props}>
    <div>WalletCreate</div>
  </Create>
);
