import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { productsCategoriesQuery } from "@/src/gql/queries/productsCategoriesQuery.gql";

export const useProductCategories = () => {
    const api = useApi();

    return useQuery({
        queryKey: ["productCategories"],
        queryFn: async () => {
            const { productCategories } = await api.request(productsCategoriesQuery);
            return productCategories;
        },
    });
};
