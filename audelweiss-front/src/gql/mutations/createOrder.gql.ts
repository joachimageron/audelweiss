import gql from "graphql-tag";

export const createOrder = gql`
  mutation CreateOrder($input: OrderInput!) {
    createOrder(data: $input) {
      data {
        id
        attributes {
          documentId
          createdAt
        }
      }
    }
  }
`;
