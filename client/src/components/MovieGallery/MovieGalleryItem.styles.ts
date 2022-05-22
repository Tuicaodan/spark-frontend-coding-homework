import tw from "twin.macro";
import styled from "styled-components";

export const SearchItemContainer = styled.li`
  ${tw`
        bg-[#F6F7F7]
        rounded-lg
        shadow-lg
        list-none
        my-4
        mx-4
        relative
        flex
        flex-row
        justify-center
        cursor-pointer
        h-[296px]
        w-[191px]
    `}
  img {
    ${tw`
        object-cover
        object-center
        rounded-lg
          `}
  }
  div {
    ${tw`
    absolute
    top-0
    rounded-lg
    opacity-0
    bg-black
    bottom-0
    w-full
    h-full
    hover:opacity-100
    hover:bg-opacity-60
    justify-center
    flex
    flex-col
    `}
  }
  p {
    ${tw`
        text-center
        text-white
        text-lg
        font-bold
        `}
  }
`;
