import { gql } from "graphql-tag";

export const quoteFragment = gql`
  fragment QuoteFields on ComponentBlocksQuote {
    id
    text
  }
`;
