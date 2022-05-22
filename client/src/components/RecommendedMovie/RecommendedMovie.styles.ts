import tw from "twin.macro";
import styled from "styled-components";

export const RecommendedListContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-start
        h-[300px]
        bg-gray-500
        my-auto
        mx-auto
        `}
`;

export const RecommendedListTitle = styled.div`
  ${tw`
        text-center
        text-gray-700
        text-lg
        font-bold
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

export const RecommendedList = styled.div`
  width: fit-content ${tw`
        flex
        flex-row
        justify-start
        h-[200px]
        overflow-x-auto
        `};
`;
