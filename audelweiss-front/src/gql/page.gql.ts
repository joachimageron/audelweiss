import { gql } from "graphql-tag";
import { cardsListFragment } from "./fragments/blocks/cardsListFragment.gql";

export const pagesQuery = gql`
  query Pages($filters: PageFiltersInput) {
    pages(filters: $filters) {
      title
      slug
      content {
        __typename
        ...CardsListFields
      }
    }
  }
  ${cardsListFragment}
`;
