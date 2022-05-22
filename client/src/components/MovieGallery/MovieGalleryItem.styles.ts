import tw from "twin.macro";
import styled from "styled-components";

export const SearchItemContainer = styled.li`
  ${tw`
        bg-[#F6F7F7]
        rounded-lg
        shadow-lg
        h-72
        list-none
        my-4
        mx-2
        relative
        flex
        flex-row
        justify-center
        cursor-pointer
    `}
  img {
    ${tw`
        h-full
        w-full
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
