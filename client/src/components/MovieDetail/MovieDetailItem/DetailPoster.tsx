import React from "react";
import { DetailImageContainer, Image } from "./DetailPoster.styles";
import missingPoster from "../../../asset/image/missingPoster.png";

type Props = {
  posterUrl: string;
};

const DetailPoster = (props: Props) => {
  let posterImage = missingPoster;
  if (props.posterUrl !== null) {
    const posterEndponit = process.env.REACT_APP_POSTER_W500_API_BASE_URL
      ? process.env.REACT_APP_POSTER_W500_API_BASE_URL
      : "https://image.tmdb.org/t/p/w500";
    posterImage = posterEndponit + props.posterUrl;
  }

  return (
    <DetailImageContainer>
      <Image src={posterImage} alt="poster" />
    </DetailImageContainer>
  );
};

export default DetailPoster;
