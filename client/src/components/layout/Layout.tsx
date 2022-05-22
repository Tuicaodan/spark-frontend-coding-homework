import React from "react";

import { LayoutContainer } from "./Layout.styles";

import Nav from "./Nav";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Nav />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
