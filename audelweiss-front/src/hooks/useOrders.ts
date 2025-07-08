import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { Order } from "../types/generated";
import { ordersQuery } from "../gql/order.gql";

type Params = {
  filters?: {
    id: string;
  };
  queryKey: string[];
};

const mapFilters = (filters: Params["filters"]) => {
  if (!filters) return undefined;

  return {
    filters: {
      documentId: { eq: filters.id },
    },
  };
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
