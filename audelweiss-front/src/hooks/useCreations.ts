import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { creationsQuery } from "@/src/gql/queries/creationsQuery.gql";
import { Creation } from "../types/generated";

export const useCreations = () => {
  const api = useApi();

  return useQuery({
    queryKey: ["creations"],
    queryFn: async () => {
      const { creations } = await api.request<{ creations: Creation }>(creationsQuery);
      return creations;
    },
  });
};
