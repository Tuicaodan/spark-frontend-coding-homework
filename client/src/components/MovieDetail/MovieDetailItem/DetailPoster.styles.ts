import tw from "twin.macro";
import styled from "styled-components";

export const DetailImageContainer = styled.div`
  grid-area: poster;
  z-index: 1;
  ${tw`
        align-middle
        flex
        flex-col
        text-justify
        m-auto
        w-[250px]
    `}
`;

export const Image = styled.img`
  width: fit-content;
  max-height: 350px;

  ${tw`
        my-auto
        object-cover
        object-top
        top-0
        block
        rounded-md
        `}
`;
