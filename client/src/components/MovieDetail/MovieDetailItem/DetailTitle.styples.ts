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
        pt-2
        align-middle
        flex
        flex-row
        justify-center
        mx-auto
        `}
  h1 {
    ${tw`
        text-[40px]
        font-bold
        text-center
        my-auto
        mx-1
        `}
  }
  span {
    ${tw`
      text-2xl
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
   text-[20px]
    text-center
  `}
`;

export const BasicInfo = styled.div`
  ${tw`
    flex
    flex-row  
    justify-center  
    mx-auto
    text-[13px]
    `}
`;

export const BasicInfoItem = styled.div`
  ${tw`
    mx-[2px]
    italic
    text-gray-200
    `}
`;
