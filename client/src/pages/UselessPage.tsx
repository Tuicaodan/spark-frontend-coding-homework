import React from "react";

import { NoResourcesPageContainer } from "./NoResourcesPage.styles";
import useless from "../asset/image/useless.gif";

const NoResourcesPage = () => {
  return (
    <NoResourcesPageContainer>
            <div>Told You So!</div>
      <img src={useless} alt="useless" width={"600px"} />
    </NoResourcesPageContainer>
  );
};

export default NoResourcesPage;
