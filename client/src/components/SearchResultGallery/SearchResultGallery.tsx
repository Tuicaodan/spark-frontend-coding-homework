import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

import SearchResultItem from "./SearchResultItem";

import {
  SearchResultListContainer,
  SearchResultLoadMore,
} from "./SearchResultGallery.styles";

const SearchResultGallery = () => {
  const searhResult = useSelector(
    (state: RootState) => state.movieList.movieList.searchList
  );

  const renderSearchResultItems = () => {
    if (searhResult.length === 0) {
      return (
        <SearchResultLoadMore>
          <p>No results found</p>
        </SearchResultLoadMore>
      );
    }
    return searhResult.map((movie) => (
      <SearchResultItem
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

export default SearchResultGallery;
