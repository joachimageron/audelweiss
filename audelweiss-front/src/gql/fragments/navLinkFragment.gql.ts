import { gql } from "graphql-tag";

export const navLinkFragment = gql`
  fragment NavLinkFields on ComponentNavigationLink {
    label
    url
    hasIconOnly
    icon {
      url
    }
  }
`;
