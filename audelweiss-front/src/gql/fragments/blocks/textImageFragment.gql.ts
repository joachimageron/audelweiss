import { gql } from "graphql-tag";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const textImageFragment = gql`
    fragment TextImageFields on ComponentBlocksImageAndText {
        id
        textWithImage
        image {
            ...ImageFields
        }
        isImageLeft
        isImageTaller
        
    }
    ${imageFragment}
`;
