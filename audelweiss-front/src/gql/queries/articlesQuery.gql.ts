import { gql } from "graphql-tag";
import { articleFragment } from "@/src/gql/fragments/articleFragment.gql";

export const articlesQuery = gql`
  query Articles {
    articles {
      ...ArticleFields
    }
  }
  ${articleFragment}
`;
