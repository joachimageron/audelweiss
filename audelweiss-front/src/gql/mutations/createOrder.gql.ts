import gql from "graphql-tag";

export const createOrder = gql`
  mutation CreateOrder($input: OrderInput!) {
    createOrder(data: $input) {
      order_items {
        documentId
      }
      user {
        documentId
      }
    }
  }
`;
