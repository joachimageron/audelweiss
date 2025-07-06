import { productsQuery } from "../gql/product.gql";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { Product } from "../types/generated";

type Params = {
  filters?: {
    slug: string;
  };
  queryKey: string[];
};

const mapFilters = (filters: Params["filters"]) => {
  if (!filters) return undefined;

  return {
    filters: {
      productSlug: { eq: filters.slug },
    },
  };
};

export const useProduct = ({ filters, queryKey }: Params) => {
  const api = useApi();

  const queryFn = async () => {
    const response = await api.request<{ products: Product[] }>(productsQuery, {
      ...mapFilters(filters),
    });

    return response.products[0];
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};
