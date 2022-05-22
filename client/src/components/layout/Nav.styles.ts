import tw from "twin.macro";
import styled from "styled-components";

export const NavContainer = styled.header`
  ${tw`
    flex
    flex-row
    justify-between
    w-full
    h-16
    bg-[#032540]
`}
`;

export const LogoContainer = styled.div`
  ${tw`
    flex
    flex-row
    lg:ml-10
    ml-3
    my-auto
    `}
`;

export const NavItems = styled.nav`
  ${tw`
    flex
    align-middle
    `}
  ul {
    ${tw`
    flex
    h-full
    lg:mr-8
    my-auto
    mr-4
    list-none
    text-white
    `}
  }
  li {
    ${tw`
    h-full
    mx-1
    my-auto
    text-base
    flex
    flex-col
    justify-center
    px-2
    `}
  }
  a {
    ${tw`
    text-white
    no-underline
    hover:text-gray-300
    active:text-gray-300
    `}
  }
`;
