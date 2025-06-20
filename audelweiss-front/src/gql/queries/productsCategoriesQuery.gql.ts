import { gql } from "graphql-tag";
import { productCategoriesFragment } from "@/src/gql/fragments/productCategoriesFragment.gql";

export const productsCategoriesQuery = gql`
  query ProductCategories {
    productCategories {
      ...productCategoriesFields
    }
  }
  ${productCategoriesFragment}
`;