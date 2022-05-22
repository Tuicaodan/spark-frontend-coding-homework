import React from "react";
import {
  Title,
  DetailTitleContainer,
  Tagline,
  BasicInfo,
  BasicInfoItem,
} from "./DetailTitle.styples";
import { minToHour } from "../../../lib/general.lib";

type Props = {
  title: string;
  year: string;
  releaseDate: string;
  genres: Genre[];
  runtime: number;
  tagline: string;
};

export type Genre = {
  id: number;
  name: string;
};

const DetailTitle = ({
  title,
  year,
  releaseDate,
  genres,
  runtime,
  tagline,
}: Props) => {
  const genresText = genres.map((genre) => {
    return <BasicInfoItem key={genre.id}>{genre.name},</BasicInfoItem>;
  });

  return (
    <DetailTitleContainer>
      <Title>
        <h1>
          {title}
          <span>({year})</span>
        </h1>
      </Title>
      <BasicInfo>
        <BasicInfoItem>{releaseDate}</BasicInfoItem> ◇ {genresText} ◇
        <BasicInfoItem>{minToHour(runtime)}</BasicInfoItem>
      </BasicInfo>
      <Tagline>{tagline}</Tagline>
    </DetailTitleContainer>
  );
};

export default DetailTitle;
