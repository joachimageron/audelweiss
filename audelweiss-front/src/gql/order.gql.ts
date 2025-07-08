import gql from "graphql-tag";

export const ordersQuery = gql`
  query Orders($filters: OrderFiltersInput) {
    orders(filters: $filters) {
      documentId
      order_items {
        documentId
        item {
          ... on ComponentOrderItemProductReference {
            id
            product {
              documentId
            }
            product_variant_options {
              documentId
              label
              price
              variant {
                documentId
                name
              }
            }
          }
        }
        quantity
        createdAt
        updatedAt
        publishedAt
      }
      user {
        documentId
        email
        firstName
        lastName
      }
      createdAt
      updatedAt
      publishedAt
    }
  }
`;
