import { gql } from "graphql-tag";
import { cardsListFragment } from "@/src/gql/fragments/blocks/cardsListFragment.gql";
import { singleSliderFragment } from "@/src/gql/fragments/blocks/singleSliderFragment.gql";
import { highlightingCreationsFragment } from "@/src/gql/fragments/blocks/highlightingCreationsFragment.gql";
import { quoteFragment } from "@/src/gql/fragments/blocks/quoteFragment.gql";
import { singleRichtextFragment } from "@/src/gql/fragments/blocks/singleRichtextFragment.gql";
import { featuredArticlesFragment } from "@/src/gql/fragments/blocks/featuredArticlesFragment.gql";

export const pagesQuery = gql`
  query Pages($filters: PageFiltersInput) {
    pages(filters: $filters) {
      title
      slug
      content {
        __typename
        ...CardsListFields
        ...SingleSliderFields
        ...HighlightingCreationsFields
        ...QuoteFields
        ...SingleRichtextFields
        ...FeaturedArticlesFields
      }
    }
  }
  ${cardsListFragment}
  ${singleSliderFragment}
  ${highlightingCreationsFragment}
  ${quoteFragment}
  ${singleRichtextFragment}
  ${featuredArticlesFragment}
`;
