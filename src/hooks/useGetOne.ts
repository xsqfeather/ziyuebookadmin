import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { getOne } from "../services/dataProvider";

export default function useGetOne(
  resource: string,
  id?: string,
  refreshKey?: number
) {
  const nav = useNavigate();
  const { data, error, isLoading } = useSWR(
    id ? [resource, id, refreshKey] : null,
    getOne
  );

  useEffect(() => {
    if (error?.response?.data?.statusCode === 401) {
      nav("/login", { replace: true });
    }
  }, [error?.response?.data?.statusCode]);

  return {
    data,
    error,
    isLoading,
  };
}
