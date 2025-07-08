import { gql } from "graphql-tag";
import { articleFragment } from "@/src/gql/fragments/articleFragment.gql";

export const singleArticleQuery = gql`
  query singleArticle($documentId: ID!) {
    article(documentId: $documentId) {
        ...ArticleFields
    }
  }
  ${articleFragment}
`;
