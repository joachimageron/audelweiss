import { gql } from "graphql-tag";

export const singleRichtextFragment = gql`
  fragment SingleRichtextFields on ComponentBlocksSingleRichtext {
    id
    richtextContent
  }
`;
