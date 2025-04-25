import { gql } from "graphql-tag";
import { simpleLinkFragment } from "@/src/gql/fragments/simpleLinkFragment.gql";
import { imageFragment } from "@/src/gql/fragments/imageFragment.gql";

export const singleSliderFragment = gql`
  fragment SingleSliderFields on ComponentBlocksSingleSlider {
    id
    listSlides {
      backgroundImage {
        ...ImageFields
      }
      id
      slideContent
      slideLink {
        ...SimpleLinkFields
      }
      slideOvertitle
      slideTitle
    }
  }
  ${simpleLinkFragment}
  ${imageFragment}
`;
