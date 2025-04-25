import { gql } from "graphql-tag";
import { simpleLinkFragment } from "@/src/gql/fragments/simpleLinkFragment.gql";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const highlightingCreationsFragment = gql` 
  fragment HighlightingCreationsFields on ComponentBlocksHighlightingCreations {
    id
    title
    content
    link {
      id
      label
      url
    }
    creationsList {
      id
      creationImage {
        ...ImageFields
      }
      creationLink {
        ...SimpleLinkFields
      }
      creationLegend
    }
  }
  ${simpleLinkFragment}
  ${imageFragment}
`;