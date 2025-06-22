import gql from "graphql-tag";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";
import { simpleLinkFragment } from "@/src/gql/fragments/simpleLinkFragment.gql";

export const footerQuery = gql`
  query Footer {
    footer {
      logo {
        ...ImageFields
      }
      centralRichtext
      reseaux {
        url
        icon {
          ...ImageFields
        }
      }
      leftColumnTitle
      leftColumnLinks {
        ...SimpleLinkFields
      }
      rightColumnTitle
      rightColumnLinks {
        ...SimpleLinkFields
      }
    }
  }
  ${imageFragment}
  ${simpleLinkFragment}
`;
