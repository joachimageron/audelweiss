import { gql } from "graphql-tag";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const articleFragment = gql`
  fragment ArticleFields on Article {
    documentId
    title
    categories {
      name
    }
    thumbnail {
      ...ImageFields
    }
    content
    publishedAt
  }
  ${imageFragment}
`;
