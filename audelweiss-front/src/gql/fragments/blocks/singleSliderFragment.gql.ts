import { gql } from "graphql-tag";
import { linkFragment } from "../linkFragment.gql";
import { imageFragment } from "../imageFragment.gql";

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
        ...LinkFields
      }
      slideOvertitle
      slideTitle
    }
  }
  ${linkFragment}
  ${imageFragment}
`;
