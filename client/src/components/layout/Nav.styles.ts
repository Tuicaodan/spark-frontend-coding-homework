import tw from "twin.macro";
import styled from "styled-components";

type BurgerMenuContainerProps = {
  isOpen: boolean;
};

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
    font-bold
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
    no-underline
    hover:text-gray-300
    active:text-gray-300
    `}
  }
`;

export const BurgerMenuContainer = styled.div`
  right: ${(props: BurgerMenuContainerProps) =>
    props.isOpen ? "-20px" : "-200px"};
  transition: 500ms;
  ${tw`
    flex
    flex-col
    justify-start
    absolute
    h-full
    w-[200px]
    bg-[rgba(0,0,0,0.8)]
    z-[98]
    `}
`;

export const BugerMenuIcon = styled.div`
  transition: 1s;
  ${tw`
    absolute
    left-[-55px]
    z-[99]
    `}
`;

export const BurgerMenuItems = styled.nav`
  ${tw`
    flex
  mt-16
    `}
  ul {
    ${tw`
    flex
    flex-col
    lg:mr-8
    ml-4
    mt-16
    my-2
    list-none
    text-white
    `}
  }
  li {
    ${tw`
    w-full
    mx-auto
    my-2
    text-base
    flex
    flex-col
    justify-center
    py-2
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
