import React from "react";

import {
  DetailRateContainer,
  RateTitle,
  PieContainer,
} from "./DetailRate.styles";
import Pie from "../../../ui/Pie";

type Props = {
  rate: number;
};

const DetailRate = ({ rate }: Props) => {
  const rateCirclePercent = rate * 10;

  let brightColor = "";
  let dimColor = "";

  switch (true) {
    case rateCirclePercent <= 33:
      brightColor = "#e40606";
      dimColor = "#5f0606";
      break;
    case rateCirclePercent <= 66:
      brightColor = "yellow";
      dimColor = "#635300";
      break;
    case rateCirclePercent <= 100:
      brightColor = "#21d07a";
      dimColor = "#204528";
      break;
    default:
      brightColor = "#FFFFFF";
      dimColor = "#7d7e7e";
      break;
  }

  return (
    <DetailRateContainer>
      <RateTitle>User Rating:</RateTitle>
      <PieContainer>
        <Pie
          percentage={rateCirclePercent}
          brightColor={brightColor}
          dimColor={dimColor}
        />
      </PieContainer>
    </DetailRateContainer>
  );
};

export default DetailRate;
