import { gql } from "graphql-tag";
import { cardsListFragment } from "@/src/gql/fragments/blocks/cardsListFragment.gql";
import { singleSliderFragment } from "@/src/gql/fragments/blocks/singleSliderFragment.gql";
import { quoteFragment } from "@/src/gql/fragments/blocks/quoteFragment.gql";
import { singleRichtextFragment } from "@/src/gql/fragments/blocks/singleRichtextFragment.gql"
import { textImageFragment } from "@/src/gql/fragments/blocks/textImageFragment.gql"
import { featuredProductsFragment } from "@/src/gql/fragments/blocks/featuredProductsFragment.gql";

export const pagesQuery = gql`
  query Pages($filters: PageFiltersInput) {
    pages(filters: $filters) {
      title
      slug
      content {
        __typename
        ...CardsListFields
        ...SingleSliderFields
        ...QuoteFields
        ...SingleRichtextFields
        ...TextImageFields
        ...FeaturedProductsFields
      }
    }
  }
  ${cardsListFragment}
  ${singleSliderFragment}
  ${quoteFragment}
  ${singleRichtextFragment}
  ${textImageFragment}
  ${featuredProductsFragment}
`;
