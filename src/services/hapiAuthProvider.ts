import axios from "axios";
import { AuthProvider } from "react-admin";
import jwt_decode from "jwt-decode";

const hapiAuthProvider: AuthProvider = {
  login: async ({
    username,
    password,
    authMethod,
  }: {
    username: string;
    password: string;
    authMethod: string;
  }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/sessions`,
        {
          username,
          password,
          authMethod,
        }
      );
      localStorage.setItem("admin_token", data.token);
    } catch (error) {
      throw "密码或者用户名错误";
    }
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("admin_token");
    return Promise.resolve();
  },
  checkError: (error) => {
    if (error.status === 401) {
      localStorage.removeItem("admin_token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("admin_token") ? Promise.resolve() : Promise.reject(),
  // getPermissions: async () => {
  //   try {
  //     const token = localStorage.getItem("admin_token");
  //     if (!token) {
  //       return Promise.resolve([]);
  //     }
  //     const decoded: any = jwt_decode(token);
  //     const { data } = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/admins/${decoded.userId}/permissions`,
  //       {
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );
  //     return Promise.resolve(data.data);
  //   } catch (error) {
  //     console.error(error);
  //     // return Promise.reject();
  //   }
  // },
  getIdentity: async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const decoded: any = jwt_decode(token || "");

      axios.defaults.headers.common["authorization"] = token;

      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${decoded.userId}`
      );
      return Promise.resolve({
        id: data.id,
        fullName: data.username,
        avatar: data.avatar,
      });
    } catch (error) {
      console.error(error);
      localStorage.removeItem("admin_token");
      return Promise.resolve({
        id: "",
        fullName: "",
        avatar: "",
      });
    }
  },
  getPermissions: function (params: any): Promise<any> {
    return Promise.resolve();
  },
};

export default hapiAuthProvider;
