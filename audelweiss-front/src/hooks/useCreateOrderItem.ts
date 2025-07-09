import { useMutation } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { OrderItem } from "../types/generated";
import { createOrderItem } from "../gql/mutations/createOrderItem.gql";

type Payload = {
  quantity: number;
  order_items: number[];
};

export const useCreateOrderItem = () => {
  const api = useApi();

  const mutationFn = async (input: Payload) => {
    const response = await api.request<{ createOrderItem: { item: OrderItem } }>(createOrderItem, { input });

    return response.createOrderItem;
  };

  return useMutation({ mutationFn });
};
