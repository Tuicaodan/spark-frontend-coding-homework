import tw from "twin.macro";
import styled from "styled-components";

export const DetailInstructionContainer = styled.div`
  grid-area: overview;
  z-index: 1;
  ${tw`
        align-middle
        flex
        flex-col
        text-justify
        mx-8
        mb-3
    `}
`;

export const DetailInstructionOverview = styled.div`
  ${tw`
        w-full
        text-base
        flex
        flex-col
        mb-2
        `}
  h1 {
    ${tw`
        font-bold
        text-sm
        my-auto
        `}
  }
  p {
    ${tw`
        text-[10px]
        align-text-top
        leading-none
        `}
  }
`;

