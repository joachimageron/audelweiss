import gql from "graphql-tag";
import { linkFragment } from "./fragments/linkFragment.gql";

export const headerQuery = gql`
  query Header {
    header {
      logo {
        url
      }
      navigation {
        entries {
          ...LinkFields
        }
        heading {
          ...LinkFields
        }
        id
      }
    }
  }
  ${linkFragment}
`;
