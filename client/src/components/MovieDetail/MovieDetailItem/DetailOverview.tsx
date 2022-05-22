import React from "react";

import {
  DetailInstructionContainer,
  DetailInstructionOverview,
} from "./DetailOverview.style";

type Props = {
  overview: string;
};

const DetailInstruction = ({ overview }: Props) => {
  return (
    <DetailInstructionContainer>
      <DetailInstructionOverview>
        <h1>Overview</h1>
        <p>{overview}</p>
      </DetailInstructionOverview>
    </DetailInstructionContainer>
  );
};



export default DetailInstruction;
