import tw from "twin.macro";
import styled from "styled-components";

type Props = {
  size: number;
};

export const LogoContainer = styled.div`
  height: ${(props: Props) => props.size}px;
  ${tw`
    flex
    flex-row
    justify-center    
    align-middle
    mx-auto
    cursor-pointer
    `}
  img {
    ${tw`
        h-full
        px-2
    `}
  }
  h1 {
    ${tw`
        text-2xl
        text-center
        text-gray-800
        font-bold
        px-2
        my-auto
        `}
  }
`;
