import { gql } from "graphql-tag";
import { articleFragment } from "@/src/gql/fragments/articleFragment.gql";

export const featuredArticlesFragment = gql`
  fragment FeaturedArticlesFields on ComponentBlocksFeaturedArticles {
    id
    articles {
      ...ArticleFields
    }
    title
  }
  ${articleFragment}
`;
