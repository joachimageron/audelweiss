import { gql } from "graphql-tag";
import { cardsListFragment } from "@/src/gql/fragments/blocks/cardsListFragment.gql";
import { singleSliderFragment } from "@/src/gql/fragments/blocks/singleSliderFragment.gql";
import { highlightingCreationsFragment } from "@/src/gql/fragments/blocks/highlightingCreationsFragment.gql";

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
      }
    }
  }
  ${cardsListFragment}
  ${singleSliderFragment}
  ${highlightingCreationsFragment}
`;
