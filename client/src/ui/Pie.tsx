import React from "react";

type CircleProps = {
  percentage: number;
  color: string;
};

type TextProps = {
  percentage: number;
};

type PieProps = {
  percentage: number;
  brightColor: string;
  dimColor: string;
};

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, percentage }: CircleProps) => {
  const radius = 30;
  const circle = 2 * Math.PI * radius;
  const strokePercentage = ((100 - percentage) * circle) / 100;
  return (
    <circle
      r={radius}
      cx={161}
      cy={40}
      fill="transparent"
      stroke={strokePercentage !== circle ? color : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.6rem"}
      strokeDasharray={circle}
      strokeDashoffset={percentage ? strokePercentage : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }: TextProps) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1em"}
      fill="#fff"
      fontWeight={"bold"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie = ({ percentage, brightColor, dimColor }: PieProps) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={"100%"} height={"100%"} z-index={99}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color={dimColor} percentage={100} />
        <Circle color={brightColor} percentage={percentage} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default Pie;
