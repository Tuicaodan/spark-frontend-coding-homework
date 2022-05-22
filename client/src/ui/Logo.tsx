import React from "react";
import { Link } from 'react-router-dom'

import { LogoContainer } from "./Logo.styles";
import logo_big_black from "../asset/image/logo_big_black.png";
import logo_small_white from "../asset/image/logo_small_white.png";


type Props = {
  size: number;
  hasText: boolean;
  color: string;
};

const Logo = ({ hasText, color, size }: Props) => {
  const logoUrl = color === "white" ? logo_small_white : logo_big_black;

  return (
    <Link to="/">
    <LogoContainer size={size}>
      <img src={logoUrl} alt="logo" />
      {hasText && <h1>Minimalism Movie Search</h1>}
      </LogoContainer>
    </Link>
  );
};

export default Logo;
