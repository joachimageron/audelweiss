import { gql } from "graphql-tag";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const productSubcategoriesFragment = gql`
  fragment ProductSubcategoriesFields on ProductSubcategory {
    documentId
    slug
    name
    illustration {
      ...ImageFields
    }
  }
  ${imageFragment}
`;
