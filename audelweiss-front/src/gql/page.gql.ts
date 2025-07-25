import { gql } from "graphql-tag";
import { cardsListFragment } from "@/src/gql/fragments/blocks/cardsListFragment.gql";
import { singleSliderFragment } from "@/src/gql/fragments/blocks/singleSliderFragment.gql";
import { highlightingCreationsFragment } from "@/src/gql/fragments/blocks/highlightingCreationsFragment.gql";
import { quoteFragment } from "@/src/gql/fragments/blocks/quoteFragment.gql";
import { singleRichtextFragment } from "@/src/gql/fragments/blocks/singleRichtextFragment.gql";
import { featuredArticlesFragment } from "@/src/gql/fragments/blocks/featuredArticlesFragment.gql";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";
import { textImageFragment } from "@/src/gql/fragments/blocks/textImageFragment.gql"
import { featuredProductsFragment } from "@/src/gql/fragments/blocks/featuredProductsFragment.gql";

export const pagesQuery = gql`
  query Pages($filters: PageFiltersInput) {
    pages(filters: $filters) {
      documentId
      title
      slug
      type
      illustrationImage {
        ...ImageFields
      }
      content {
        __typename
        ...CardsListFields
        ...SingleSliderFields
        ...HighlightingCreationsFields
        ...QuoteFields
        ...SingleRichtextFields
        ...TextImageFields
        ...FeaturedProductsFields
        ...FeaturedArticlesFields
      }
    }
  }
  ${imageFragment}
  ${cardsListFragment}
  ${singleSliderFragment}
  ${highlightingCreationsFragment}
  ${quoteFragment}
  ${singleRichtextFragment}
  ${textImageFragment}
  ${featuredProductsFragment}
  ${featuredArticlesFragment}
`;
