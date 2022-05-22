import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import LoadingSpinner from "../../ui/LoadingSpinner";
import MovieGalleryItem from "../MovieGallery/MovieGalleryItem";
import { MovieInList } from "../../types/movie-types";

import {
  RecommendedListContainer,
  RecommendedListTitle,
  RecommendedList,
  MessageContainer,
} from "./RecommendedMovie.styles";

type Props = {
  id: string;
};

const RecommendedMovie = ({ id }: Props) => {
  const recommendedMovie = useSelector(
    (state: RootState) => state.movieDetail.movieDetail.recommended
  );
  const currentMovieTitle = useSelector(
    (state: RootState) => state.movieDetail.movieDetail.title
  );

  return (
    <RecommendedListContainer>
      <RecommendedListTitle>
        More Recommended Movies Base on {currentMovieTitle} :
      </RecommendedListTitle>
      {recommendedMovie.length === 0 ? (
        <MessageContainer>
          <p>No results found</p>
        </MessageContainer>
      ) : (
        <RecommendedList>
          {recommendedMovie.map((movie) => (
            <MovieGalleryItem
              key={movie.id}
              title={movie.title}
              year={movie.year}
              id={movie.id}
              poster_path={movie.poster_path}
            />
          ))}
        </RecommendedList>
      )}
    </RecommendedListContainer>
  );
};

export default RecommendedMovie;
