import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import {
  NavContainer,
  LogoContainer,
  NavItems,
  BurgerMenuContainer,
  BurgerMenuItems,
  BugerMenuIcon,
} from "./Nav.styles";

import Logo from "../../ui/Logo";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 600 });

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <NavContainer>
      <LogoContainer>
        <Logo hasText={false} color={"white"} size={50} />
      </LogoContainer>
      {isMobile ? (
        <BurgerMenuContainer isOpen={isOpen}>
          <BugerMenuIcon>
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </BugerMenuIcon>
          <BurgerMenuItems>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
            </ul>
          </BurgerMenuItems>
        </BurgerMenuContainer>
      ) : (
        <NavItems>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </NavItems>
      )}
    </NavContainer>
  );
};

export default Nav;
