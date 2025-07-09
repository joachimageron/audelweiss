import { useMutation } from "@tanstack/react-query";
import { useApi } from "@/src/hooks/useApi";
import { Order } from "../types/generated";
import { createOrder } from "../gql/mutations/createOrder.gql";

type Payload = {
  user: number;
  order_items: number[];
};

export const useCreateOrder = () => {
  const api = useApi();

  const mutationFn = async (payload: Payload) => {
    const response = await api.request<{ createOrder: { order: Order } }>(createOrder, { input: payload });

    return response.createOrder;
  };

  return useMutation({ mutationFn });
};
