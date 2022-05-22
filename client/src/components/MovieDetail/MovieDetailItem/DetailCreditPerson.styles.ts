import tw from "twin.macro";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-start
        leading-none
        h-[190px]
        w-[104px]
        bg-gray-50
        rounded-md
        mx-1
        `}
`;

export const ProfileImage = styled.img`
  /* height: fit-content; */
  ${tw`
        object-scale-down


        `}
`;

export const ProfileText = styled.div`
  ${tw`
        flex
        flex-col
        justify-start
        mx-auto
        text-[10px]
        text-center
        text-gray-800
        mt-[1px]
        `}
`;

export const ProfileName = styled.div`
  ${tw`
        font-bold
        text-[12px]
        `}
`;

export const ProfileCharacter = styled.div`
  ${tw`
        font-medium
        italic

        `}
`;
