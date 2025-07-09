import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { Order } from "../types/generated";
import { ordersQuery } from "../gql/order.gql";

type Params = {
  filters?: {
    id?: string;
    userId?: string;
  };
  queryKey: string[];
};

const mapFilters = (filters: Params["filters"]) => {
  if (!filters) return undefined;

  const mappedFilters: any = {};

  if (filters.id) {
    mappedFilters.documentId = { eq: filters.id };
  }

  if (filters.userId) {
    mappedFilters.user = {
      documentId: { eq: filters.userId },
    };
  }

  return Object.keys(mappedFilters).length > 0 ? { filters: mappedFilters } : undefined;
};

export const useOrders = ({ filters, queryKey }: Params) => {
  const api = useApi();

  const queryFn = async () => {
    const response = await api.request<{ orders: Order[] }>(ordersQuery, {
      ...mapFilters(filters),
    });

    return response.orders;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
};