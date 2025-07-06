import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { singleArticleQuery } from "@/src/gql/queries/singleArticleQuery.gql";

export const useSingleArticle = (documentId: string) => {
    const api = useApi();

    return useQuery({
        queryKey: ["article", documentId],
        queryFn: async () => {
            const { article } = await api.request(singleArticleQuery, { documentId });
            return article;
        },
        enabled: !!documentId,
    });
};
