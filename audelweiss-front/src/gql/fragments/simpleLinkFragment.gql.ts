import { gql } from "graphql-tag";

export const simpleLinkFragment = gql`
  fragment SimpleLinkFields on ComponentComponentSimpleLink {
    label
    url
  }
`;
