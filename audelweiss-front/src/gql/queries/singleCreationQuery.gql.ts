import { gql } from "graphql-tag";
import { creationFragment } from "@/src/gql/fragments/creationFragment.gql";

export const singleCreationQuery = gql`
  query singleCreation($documentId: ID!) {
    creation(documentId: $documentId) {
        ...CreationFields
    }
  }
  ${creationFragment}
`;
