import { gql } from "graphql-tag";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const creationFragment = gql`
  fragment CreationFields on Creation {
    documentId
    creationName
    creationCategories {
      name
      slug
    }
    creationThumbnail {
      ...ImageFields
    }
    creationDescription
    creationTime
    creationContent {
      richtextContent
    }
    creationGallery {
      ...ImageFields
    }
    creationSlug
    publishedAt
  }
  ${imageFragment}
`;
