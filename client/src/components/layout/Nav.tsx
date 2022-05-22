import React from "react";
import {Link} from 'react-router-dom'
import { NavContainer, LogoContainer, NavItems } from "./Nav.styles";

import Logo from "../../ui/Logo";

const Nav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo hasText={false} color={"white"} size={50} />
      </LogoContainer>
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
    </NavContainer>
  );
};

export default Nav;
