import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { MovieDetailContainer } from "./MovieDetail.styles";

import DetailTitle from "./MovieDetailItem/DetailTitle";
import DetailInstruction from "./MovieDetailItem/DetailOverview";
import DetailPoster from "./MovieDetailItem/DetailPoster";
import DetailRate from "./MovieDetailItem/DetailRate";
import DetailCredits from "./MovieDetailItem/DetailCredits";
import LoadingSpinner from "../../ui/LoadingSpinner";

const MovieDetail = () => {
  const movieDetail = useSelector(
    (state: RootState) => state.movieDetail.movieDetail
  );

  const backDropEndpoint = process.env.REACT_APP_BACKDROP_ORIGINAL_API_BASE_URL
    ? process.env.REACT_APP_BACKDROP_ORIGINAL_API_BASE_URL
    : "https://image.tmdb.org/t/p/original";

  return (
    <MovieDetailContainer
      backDorp={backDropEndpoint + movieDetail.backdrop_path}
    >
      <DetailPoster posterUrl={movieDetail.poster_path} />
      <DetailTitle
        title={movieDetail.title}
        year={movieDetail.release_date.split("-")[0]}
        releaseDate={movieDetail.release_date}
        genres={movieDetail.genres}
        runtime={movieDetail.runtime}
        tagline={movieDetail.tagline}
      />
      <DetailRate rate={movieDetail.vote_average} />
      {movieDetail.overview && (
        <DetailInstruction overview={movieDetail.overview} />
      )}
      <DetailCredits
        director={movieDetail.director}
        actors={movieDetail.actors}
      />
    </MovieDetailContainer>
  );
};

export default MovieDetail;
