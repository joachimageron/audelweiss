import { gql } from "graphql-tag";
import { imageFragment } from "./fragments/imageFragment.gql";
import { productVariantFragment } from "./fragments/productVariantFragment.gql";
import { productCategoriesFragment } from "./fragments/productCategoriesFragment.gql";

export const productsQuery = gql`
  query Products($filters: ProductFiltersInput) {
    products(filters: $filters) {
      documentId
      name
      content
      description
      price
      photos {
        ...ImageFields
      }
      variants {
        ...ProductVariantFields
      }
      productSlug
      createdAt
      updatedAt
      publishedAt
      categories {
        ...ProductCategoriesFields
      }
    }
  }
  ${imageFragment}
  ${productVariantFragment}
  ${productCategoriesFragment}
`;

export const allProductsQuery = gql`
  query AllProducts {
    products {
      documentId
      name
      description
      price
      photos {
        ...ImageFields
      }
      variants {
        ...ProductVariantFields
      }
      productSlug
      createdAt
      updatedAt
      publishedAt
    }
  }
  ${imageFragment}
  ${productVariantFragment}
`;
