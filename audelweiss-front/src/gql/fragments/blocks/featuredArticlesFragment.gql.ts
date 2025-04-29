import { gql } from "graphql-tag";
import { simpleLinkFragment } from "@/src/gql/fragments/simpleLinkFragment.gql";
import { articleFragment } from "@/src/gql/fragments/articleFragment.gql";

export const featuredArticlesFragment = gql`
  fragment FeaturedArticlesFields on ComponentBlocksFeaturedArticles {
    id
    articles {
        ...ArticleFields
    }
    title
    link {
        ...SimpleLinkFields 
    }
  }
  ${articleFragment}
  ${simpleLinkFragment}
`;
