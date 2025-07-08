import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { singleArticleQuery } from "@/src/gql/queries/singleArticleQuery.gql";
import { Article } from "../types/generated";

export const useSingleArticle = (documentId: string) => {
  const api = useApi();

  return useQuery({
    queryKey: ["article", documentId],
    queryFn: async () => {
      const { article } = await api.request<{ article: Article }>(singleArticleQuery, { documentId });
      return article;
    },
    enabled: !!documentId,
  });
};
