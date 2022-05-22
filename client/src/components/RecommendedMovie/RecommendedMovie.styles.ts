import tw from "twin.macro";
import styled from "styled-components";

export const RecommendedListContainer = styled.div`
  width: fit-content ${tw`
  mt-16
        flex
        flex-col
        justify-start
        my-auto
        h-full
        `};
`;

export const RecommendedListTitle = styled.div`
  ${tw`
        text-center
        text-gray-700
        text-lg
        font-bold
        pt-8
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
  ${tw`
        flex
        flex-row
        overflow-x-scroll
        `};
`;
