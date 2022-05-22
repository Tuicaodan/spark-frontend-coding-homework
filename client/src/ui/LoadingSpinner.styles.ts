import tw from "twin.macro";
import styled from "styled-components";

export const Spinner = styled.div`
  ${tw`
    border-4
    border-t-gray-600
    border-l-transparent
    border-r-transparent
    border-b-gray-600
    rounded-full
    m-3
    block
    h-12
    w-12
    animate-loadingSpinner
    `}
`;


