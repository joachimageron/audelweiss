import { gql } from "graphql-tag";
import { imageFragment } from "./fragments/imageFragment.gql";
import { productVariantFragment } from "./fragments/productVariantFragment.gql";
import { productSubcategoriesFragment } from "./fragments/productSubcategoriesFragment.gql";

export const productsQuery = gql`
  query Products($filters: ProductFiltersInput) {
    products(filters: $filters, pagination: { limit: -1 }) {
      documentId
      name
      content
      description
      price
      stock
      discount
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
      subcategories {
        ...ProductSubcategoriesFields
      }
    }
  }
  ${imageFragment}
  ${productVariantFragment}
  ${productSubcategoriesFragment}
`;

export const allProductsQuery = gql`
  query AllProducts {
    products(pagination: { limit: -1 }) {
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
      subcategories {
        ...ProductSubcategoriesFields
      }
      productSlug
      createdAt
      updatedAt
      publishedAt
    }
  }
  ${imageFragment}
  ${productVariantFragment}
  ${productSubcategoriesFragment}
`;
