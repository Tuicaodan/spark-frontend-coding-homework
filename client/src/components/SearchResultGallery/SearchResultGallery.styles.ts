import tw from "twin.macro";
import styled from "styled-components";


export const SearchResultListContainer = styled.div`
  ${tw`
        flex
        mx-auto
        flex-wrap
        justify-center
        w-full
        md:px-8
        px-1
        `}
`;

export const SearchResultLoadMore = styled.div`
  ${tw`
        w-full
        h-10
        m-auto
        my-2
        py-2
        bg-gray-200
        hover:bg-gray-400
        active:bg-gray-500
        rounded-md
        text-center
        text-gray-700
        align-middle
        cursor-pointer
        `}
`;
