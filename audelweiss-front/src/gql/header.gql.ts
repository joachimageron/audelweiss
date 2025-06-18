import gql from "graphql-tag";
import { navLinkFragment } from "@/src/gql/fragments/navLinkFragment.gql";

export const headerQuery = gql`
    query Header {
      header {
        logo {
          url
        }
        navigation {
          entries {
            ...NavLinkFields
          }
          heading {
            ...NavLinkFields
          }
          id
        }
      }
    }
  ${navLinkFragment}
`;
