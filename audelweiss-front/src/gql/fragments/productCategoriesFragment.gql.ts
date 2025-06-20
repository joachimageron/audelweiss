import { gql } from "graphql-tag";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const productCategoriesFragment = gql`
  fragment productCategoriesFields on ProductCategory {
    documentId
    slug
    name
    illustration {
      ...ImageFields
    }
    product_subcategories {
        documentId
        slug
        name
        illustration {
            ...ImageFields
        }  
    }
  }
  ${imageFragment}
`;
