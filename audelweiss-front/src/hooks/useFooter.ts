import { useQuery } from "@tanstack/react-query";
import { footerQuery } from "@/src/gql/footer.gql";
import { useApi } from "@/src/hooks/useApi";

type Params = {
  queryKey: string[];
};

export const useFooter = ({ queryKey }: Params) => {
  const api = useApi();

  const queryFn = async () => {
    const response = await api.request<footerQuery>(footerQuery);
    return response.footer;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
