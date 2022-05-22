import tw from "twin.macro";
import styled from "styled-components";

export const DetailTitleContainer = styled.div`
  grid-area: title;
  ${tw`
    flex
    flex-col
    z-10
    `}
`;

export const Title = styled.div`
  ${tw`
        pt-6
        align-middle
        flex
        flex-row
        justify-center
        mx-auto
        `}
  h1 {
    ${tw`
        text-2xl
        font-bold
        text-center
        my-auto
        mx-1
        `}
  }
  span {
    ${tw`
      text-xl
      font-normal
      text-center
      italic
      mx-1
      `}
  }
`;

export const Tagline = styled.div`
  ${tw` 
    text-gray-400
    italic
   text-xs
    text-center
  `}
`;

export const BasicInfo = styled.div`
  ${tw`
    flex
    flex-row  
    justify-center  
    mx-auto
    text-[9px]
    `}
`;

export const BasicInfoItem = styled.div`
  ${tw`
    mx-[2px]
    italic
    text-gray-200
    `}
`;