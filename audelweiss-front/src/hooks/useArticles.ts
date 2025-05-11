import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { articlesQuery } from "@/src/gql/queries/articlesQuery.gql";

export const useArticles = () => {
    const api = useApi();

    return useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const { articles } = await api.request(articlesQuery);
            return articles;
        },
    });
};
