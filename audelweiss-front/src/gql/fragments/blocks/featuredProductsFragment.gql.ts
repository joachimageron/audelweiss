import { gql } from "graphql-tag";
import { simpleLinkFragment } from "@/src/gql/fragments/simpleLinkFragment.gql";
import { productFragment } from "@/src/gql/fragments/productFragment.gql";
import { imageFragment } from "../imageFragment.gql";

export const featuredProductsFragment = gql`
  fragment FeaturedProductsFields on ComponentBlocksFeaturedProducts {
    id
    products {
      ...ProductFields
    }
    headingBlock
    blockLink {
      ...SimpleLinkFields
    }
  }
  ${productFragment}
  ${simpleLinkFragment}
`;