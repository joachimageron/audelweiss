import { gql } from "graphql-tag";

export const imageFragment = gql`
  fragment ImageFields on UploadFile {
    documentId
    alternativeText
    caption
    url
  }
`;
