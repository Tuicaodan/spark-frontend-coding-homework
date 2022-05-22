import tw from "twin.macro";
import styled from "styled-components";

export const DetailCreditsContainer = styled.div`
  grid-area: credits;
  z-index: 1;
  ${tw`
        flex
        flex-row
        justify-start
        w-full
        mx-auto
        h-full
        px-3
        `}
`;

export const DirectorContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-start
        mx-auto
        w-1/4
        `}
`;

export const CrewDepartment = styled.div`
  ${tw`
        text-sm
        font-bold
        mb-1
        mx-1
        `}
`;

export const ActorsContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-start
        mx-auto
        w-3/4
        `}
`;

export const ActorsProfilesContainer = styled.div`
  ${tw`
        flex
        flex-row
        justify-between
        `}
`;
