import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { singleCreationQuery } from "@/src/gql/queries/singleCreationQuery.gql";

export const useSingleCreation = (documentId: string) => {
    const api = useApi();

    return useQuery({
        queryKey: ["creation", documentId],
        queryFn: async () => {
            const { creation } = await api.request(singleCreationQuery, { documentId });
            return creation;
        },
        enabled: !!documentId,
    });
};
