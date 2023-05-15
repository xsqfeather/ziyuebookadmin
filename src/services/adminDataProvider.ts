import { fetchUtils, Options } from "react-admin";
import hapiCrud from "./hapiCrud";

export const AdminHttpClient = (url: string, options: Options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("admin_token") || "";
  (options.headers as any).set("authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const adminDataProvider = hapiCrud(
  import.meta.env.VITE_API_URL,
  AdminHttpClient
);

export default adminDataProvider;
