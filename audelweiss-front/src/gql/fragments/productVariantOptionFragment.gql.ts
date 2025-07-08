import { gql } from "graphql-tag";
import { imageFragment } from "./imageFragment.gql";

export const productVariantOptionFragment = gql`
  fragment ProductVariantOptionFields on ProductVariantOption {
      createdAt
      documentId
      image {
        ...ImageFields
      }
      label
      price
      publishedAt
      updatedAt
  },
  ${imageFragment}
`;
