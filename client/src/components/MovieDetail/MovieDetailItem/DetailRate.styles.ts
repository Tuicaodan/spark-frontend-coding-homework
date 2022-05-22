import tw from "twin.macro";
import styled from "styled-components";

export const DetailRateContainer = styled.div`
  grid-area: rate;
  ${tw`
    flex
    flex-row
    z-10
    text-white
    m-auto
    relative
    h-20
    `}
`;

export const RateTitle = styled.div`
  ${tw`
    text-white
    m-auto
    text-center 
    font-bold
    text-sm
    mx-auto
    `}
`;
export const PieContainer = styled.div`
  svg {
    ${tw`
      h-[80px]
      w-[80px]
    `}
  }
`;
