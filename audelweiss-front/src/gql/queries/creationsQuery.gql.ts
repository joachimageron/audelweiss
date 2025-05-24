import { gql } from "graphql-tag";
import { creationFragment } from "@/src/gql/fragments/creationFragment.gql";

export const creationsQuery = gql`
  query Creations {
    creations {
      ...CreationFields
    }
  }
  ${creationFragment}
`;