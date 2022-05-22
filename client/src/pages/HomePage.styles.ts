import tw from "twin.macro";
import styled from "styled-components";

type HomePageContainer = {
  showGallery: boolean;
};

export const HomePageContainer = styled.div`
  margin-top: ${(props: HomePageContainer) =>
    props.showGallery ? "20px" : "150px"};
  transition: 300ms;
  ${tw`
        flex
        flex-col
        w-full
        h-full

    `}
`;
