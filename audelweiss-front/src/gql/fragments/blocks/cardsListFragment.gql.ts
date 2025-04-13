import { gql } from "graphql-tag";
import { linkFragment } from "../linkFragment.gql";
import { imageFragment } from "../imageFragment.gql";

export const cardsListFragment = gql`
  fragment CardsListFields on ComponentBlocksCardsList {
    id
    heading
    cards {
      id
      heading
      description
      link {
        ...LinkFields
      }
      backgroundImage {
        ...ImageFields
      }
    }
  }
  ${linkFragment}
  ${imageFragment}
`;
