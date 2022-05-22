import tw from "twin.macro";
import styled from "styled-components";

type MovieDetailProps = {
  backDorp: string;
};
export const MovieDetailContainer = styled.div`
  background-image: url(${(props: MovieDetailProps) => props.backDorp});
  ${tw`
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        relative
        grid
        text-white
        px-4
        pb-3
    `}
  :after {
    ${tw`  
        absolute
        bg-[rgba(0,0,0,0.8)]
        content-[" "]
        w-full
        h-full
        z-0
        `}
  }
  @media (min-width: 900px) {
    height: 550px;
    grid-template-areas:
      "poster poster title title"
      "poster poster rate rate"
      "poster poster overview overview"
      "poster poster credits credits"
      "poster poster credits credits"
      "poster poster credits credits"
      "poster poster credits credits"
      "poster poster credits credits"
      "poster poster credits credits"
      "poster poster credits credits";
    ${tw`
      grid
      relative
      `}
  }
  @media (max-width: 899px) {
    grid-template-areas:
      "title title title title"
      "rate rate rate rate"
      "poster poster poster poster"
      "poster poster poster poster"
      "poster poster poster poster"
      "overview overview overview overview"
      "overview overview overview overview"
      "credits credits credits credits"
      "credits credits credits credits"
      "credits credits credits credits";
    ${tw`
      h-auto
      mx-auto
      bg-[rgba(0,0,0,1)]
      `}
  }
`;
