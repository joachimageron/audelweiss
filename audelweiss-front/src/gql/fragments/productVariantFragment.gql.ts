import { gql } from "graphql-tag";
import { productVariantOptionFragment } from "./productVariantOptionFragment.gql";

export const productVariantFragment = gql`
  fragment ProductVariantFields on ProductVariant {
    documentId
    createdAt
    format
    name
    required
    helper_text
    sku
    stock
    updatedAt
    variant_options {
      ...ProductVariantOptionFields
    }
  }
  ${productVariantOptionFragment}
`;
