import gql from "graphql-tag";
import { navLinkFragment } from "@/src/gql/fragments/navLinkFragment.gql";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const footerQuery = gql`
  query Footer {
    footer {
      reseaux {
        url
        icon {
          ...ImageFields
        }
      }
      richtext
      logo {
        ...ImageFields
      }
      navigation {
        id
        entries {
          ...NavLinkFields
        }
        heading {
          ...NavLinkFields
        }
      }
    }
  }

  ${navLinkFragment}
  ${imageFragment}
`;
