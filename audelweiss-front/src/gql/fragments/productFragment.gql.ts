import { gql } from "graphql-tag";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const productFragment = gql`
  fragment ProductFields on Product {
    documentId 
    productSlug
    name
    photos {
      ...ImageFields
    }
    price,
    discount
  }
  ${imageFragment}
`;
