import React from "react";
import MovieGalleryItem from "./MovieGalleryItem";
import { MovieInList } from "../../types/movie-types";

import {
  SearchResultListContainer,
  SearchResultLoadMore,
} from "./MovieGallery.styles";

type Props = {
  list: MovieInList[];
};

const MovieGallery = ({ list: searhResult }: Props) => {
  const renderSearchResultItems = () => {
    if (searhResult.length === 0) {
      return (
        <SearchResultLoadMore>
          <p>No results found</p>
        </SearchResultLoadMore>
      );
    }
    return searhResult.map((movie) => (
      <MovieGalleryItem
        key={movie.id}
        title={movie.title}
        year={movie.year}
        id={movie.id}
        poster_path={movie.poster_path}
      />
    ));
  };
  return (
    <SearchResultListContainer>
      {renderSearchResultItems()}
    </SearchResultListContainer>
  );
};

export default MovieGallery;
