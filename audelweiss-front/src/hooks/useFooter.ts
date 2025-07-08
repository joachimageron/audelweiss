import { useQuery } from "@tanstack/react-query";
import { footerQuery } from "@/src/gql/footer.gql";
import { useApi } from "@/src/hooks/useApi";
import { Footer } from "../types/generated";

type Params = {
  queryKey: string[];
};

export const useFooter = ({ queryKey }: Params) => {
  const api = useApi();

  const queryFn = async () => {
    const { footer } = await api.request<{ footer: Footer }>(footerQuery);
    return footer;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
