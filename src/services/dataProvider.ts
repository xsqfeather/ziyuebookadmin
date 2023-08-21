import axios from "axios";

export const GlobalControllers: AbortController[] = [];

export const getOne = async ([resource, id]: [
  resource: string,
  id: string
]) => {
  const token = window.localStorage.getItem("admin_token");
  axios.defaults.headers.common["authorization"] = token?.toString();
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/${resource}/${id}`
  );
  return res.data;
};

export const updateOne = async (resource: string, id: string, data: any) => {
  const token = window.localStorage.getItem("admin_token");
  axios.defaults.headers.common["authorization"] = token?.toString();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await axios.put(
    `${import.meta.env.VITE_API_URL}/${resource}/${id}`,
    data,
    {
      signal: controller.signal,
    }
  );
  return res.data;
};

export const putProductsFromExcel = async (data: any) => {
  const token = window.localStorage.getItem("admin_token");
  axios.defaults.headers.common["authorization"] = token?.toString();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await axios.put(
    `${import.meta.env.VITE_API_URL}/products/put_from_excel`,
    data,
    {
      signal: controller.signal,
    }
  );
  return res.data;
};

export const addProductsFromXianExcel = async (data: any) => {
  const token = window.localStorage.getItem("admin_token");
  axios.defaults.headers.common["authorization"] = token?.toString();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/products/add_from_xian_excel`,
    data,
    {
      signal: controller.signal,
    }
  );
  return res.data;
};

export const publishToXian = async (data: any) => {
  const token = window.localStorage.getItem("admin_token");
  axios.defaults.headers.common["authorization"] = token?.toString();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await axios.put(
    `${import.meta.env.VITE_API_URL}/products/publish_to_xian`,
    data,
    {
      signal: controller.signal,
    }
  );
  console.log({ res });
  return res.data;
};

export const publishRecordsToXian = async (data: any) => {
  const token = window.localStorage.getItem("admin_token");
  axios.defaults.headers.common["authorization"] = token?.toString();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/products/publish_many_to_xian`,
    data,
    {
      signal: controller.signal,
    }
  );
  return res.data;
};

export const addXianBannedBooks = async (data: any) => {
  const token = window.localStorage.getItem("admin_token");
  axios.defaults.headers.common["authorization"] = token?.toString();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/products_on_xian_banned/many`,
    data,
    {
      signal: controller.signal,
    }
  );
  return res.data;
};

export const publishManyToXian = async (data: any) => {
  const token = window.localStorage.getItem("admin_token");
  axios.defaults.headers.common["authorization"] = token?.toString();
  const controller = new AbortController();
  GlobalControllers.push(controller);
  const res = await axios.put(
    `${import.meta.env.VITE_API_URL}/products/publish_many_price_to_xian`,
    data,
    {
      signal: controller.signal,
    }
  );
  return res.data;
};
