import { gql } from "graphql-tag";
import { simpleLinkFragment } from "@/src/gql/fragments/simpleLinkFragment.gql";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const cardsListFragment = gql`
  fragment CardsListFields on ComponentBlocksCardsList {
    id
    heading
    cards {
      id
      heading
      description
      link {
        ...SimpleLinkFields
      }
      backgroundImage {
        ...ImageFields
      }
    }
  }
  ${simpleLinkFragment}
  ${imageFragment}
`;
