import tw from "twin.macro";
import styled from "styled-components";

export const SearchFieldContainer = styled.div`
  ${tw`
    p-0
    m-auto
    my-8
    lg:w-3/4
    w-5/6
    `}
`;

export const SearchFieldForm = styled.form`
  ${tw`
    flex
    align-middle
    w-full
    relative
    `}
  input {
    ${tw`
        p-4
        mx-5
        m-auto
        w-full
        h-10
        border-2
        shadow-md
        rounded-md
        bg-gray-200
        focus:bg-gray-100
        focus:outline-none
        `}
  }

  button {
    ${tw`
        absolute

        w-24
        h-10
        top-0
        right-0
        rounded-br-md
        rounded-tr-md
        shadow-md
        hover:bg-yellow-400
        bg-yellow-300
        focus:bg-yellow-400
    `}
  }
`;
