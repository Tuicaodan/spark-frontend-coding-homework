import tw from "twin.macro";
import styled from "styled-components";

export const SearchDropdownContainer = styled.div`
  ${tw`
        flex 
        flex-col 
        lg:w-3/4
        w-5/6
        shadow-md
        h-72
        overflow-hidden
        overflow-y-auto
        absolute
        mt-12
        bg-white
        z-50
        rounded-br-lg
        rounded-bl-lg
            `}
`;

export const MessageContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-center
        text-center
        text-red-800
        font-bold
        text-xl
        mx-auto
        my-auto
        `}
`;
