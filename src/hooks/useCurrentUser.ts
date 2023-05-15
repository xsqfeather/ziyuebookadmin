import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import useGetOne from "./useGetOne";

export default function useCurrentUser(refreshKey?: number) {
  const nav = useNavigate();
  try {
    const token = localStorage.getItem("admin_token");
    const decoded: any = jwt_decode(token || "");

    axios.defaults.headers.common["authorization"] = token;

    const { data, error, isLoading } = useGetOne(
      "users",
      decoded.userId,
      refreshKey
    );

    return { currentUser: data, loading: isLoading, refreshKey };
  } catch (error) {
    console.error(error);
    nav("/login");
    return {
      currentUser: null,
      loading: false,
      refreshKey,
    };
  }
}
