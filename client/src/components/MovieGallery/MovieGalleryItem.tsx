import React from "react";
import { SearchItemContainer } from "./MovieGalleryItem.styles";
import { Link } from "react-router-dom";

import { MovieInList } from "../../types/movie-types";
import missingPoster from "../../asset/image/missingPoster.png";

const MovieGalleryItem = (props: MovieInList) => {
  let posterImage = missingPoster;
  if (props.poster_path !== null) {
    const posterEndponit = process.env.REACT_APP_POSTER_W500_API_BASE_URL
      ? process.env.REACT_APP_POSTER_W500_API_BASE_URL
      : "https://image.tmdb.org/t/p/w500";
    posterImage = posterEndponit + props.poster_path;
  }

  return (
    <Link to={`/movie/${props.id}`}>
      <SearchItemContainer>
        <img src={posterImage} alt="poster" />
        <div>
          <p>
            {props.title} ({props.year})
          </p>
        </div>
      </SearchItemContainer>
    </Link>
  );
};

export default MovieGalleryItem;
