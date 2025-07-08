import { gql } from "graphql-tag";
import { simpleLinkFragment } from "@/src/gql/fragments/simpleLinkFragment.gql";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";
import { creationFragment } from "@/src/gql/fragments/creationFragment.gql";

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
    creations {
      ...CreationFields 
    }
  }
  ${simpleLinkFragment}
  ${imageFragment}
  ${creationFragment}
`;