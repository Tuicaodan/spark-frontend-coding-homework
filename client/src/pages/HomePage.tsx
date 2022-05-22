import React from "react";

import useHttp from "../hooks/use-http";
import Logo from "../ui/Logo";
import SearchField from "../components/SearchField/SearchField";
import { HomePageContainer } from "./HomePage.styles";

const HomePage = () => {
  
  return (
    <HomePageContainer>
      <Logo hasText={true} color={"black"} size={150} />
      <SearchField />
    </HomePageContainer>
  );
};

export default HomePage;
