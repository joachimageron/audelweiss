import { gql } from "graphql-tag";

export const linkFragment = gql`
  fragment LinkFields on ComponentNavigationLink {
    label
    url
  }
`;
