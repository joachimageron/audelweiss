import { useQuery } from "@tanstack/react-query";
import { headerQuery } from "@/src/gql/header.gql";
import { HeaderQuery } from "@/src/types/generated";
import { useApi } from "@/src/hooks/useApi";

type Params = {
  queryKey: string[];
};

export const useHeader = ({ queryKey }: Params) => {
  const api = useApi();

  const queryFn = async () => {
    const response = await api.request<HeaderQuery>(headerQuery);

    return response.header;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
