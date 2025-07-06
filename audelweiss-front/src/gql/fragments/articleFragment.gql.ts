import { gql } from "graphql-tag";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const articleFragment = gql`
  fragment ArticleFields on Article {
    documentId
    articleSlug
    articleTitle
    articleCategories  {
      name
    }
    articleThumbnail  {
      ...ImageFields
    }
    articleDescription
    articleContent {
      richtextContent
    }
    publishedAt
  }
  ${imageFragment}
`;
