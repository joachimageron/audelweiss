import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { articlesQuery } from "@/src/gql/queries/articlesQuery.gql";
import { Article } from "../types/generated";

export const useArticles = () => {
  const api = useApi();

  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { articles } = await api.request<{ articles: Article[] }>(articlesQuery);
      return articles;
    },
  });
};
