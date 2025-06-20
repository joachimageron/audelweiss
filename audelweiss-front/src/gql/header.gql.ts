import gql from "graphql-tag";
import { navLinkFragment } from "@/src/gql/fragments/navLinkFragment.gql";

export const headerQuery = gql`
  query Header {
    header {
      logo {
        url
      }
      navigation {
        heading {
          ...NavLinkFields
        }
        id
      }
    }
  }
  ${navLinkFragment}
`;
