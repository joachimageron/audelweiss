import gql from "graphql-tag";

export const createOrderItem = gql`
  mutation CreateOrderItem($input: OrderItemInput!) {
    createOrderItem(data: $input) {
      quantity
      item {
        ... on ComponentOrderItemProductReference {
          id
          product {
            documentId
          }
          product_variant_options {
            documentId
            variants {
              documentId
            }
          }
        }
      }
    }
  }
`;
