import { useQuery } from "@tanstack/react-query";
import { headerQuery } from "@/src/gql/header.gql";
import { Header } from "@/src/types/generated";
import { useApi } from "@/src/hooks/useApi";

type Params = {
  queryKey: string[];
};

export const useHeader = ({ queryKey }: Params) => {
  const api = useApi();

  const queryFn = async () => {
    const { header } = await api.request<{ header: Header }>(headerQuery);

    return header;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
