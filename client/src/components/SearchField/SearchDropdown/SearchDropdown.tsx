import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";

import {
  SearchDropdownContainer,
  MessageContainer,
} from "./SearchDropdown.styles";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import DropdownItem from "./DropdownItem";

type Props = {
  isLoading: boolean;
  error: Error | null;
};

const SearchDropdown = ({ isLoading, error }: Props) => {
  const searhResult = useSelector(
    (state: RootState) => state.movieList.movieList.searchList
  );

  const renderDropdownItems = () => {
    if (isLoading) {
      return (
        <MessageContainer>
          <LoadingSpinner />
        </MessageContainer>
      );
    }
    if (error) {
      return <MessageContainer>{error.message}</MessageContainer>;
    }

    return searhResult.map((movie) => (
      <DropdownItem
        key={movie.id}
        title={movie.title}
        year={movie.year}
        movieId={movie.id}
      />
    ));
  };

  return (
    <SearchDropdownContainer>{renderDropdownItems()}</SearchDropdownContainer>
  );
};

export default SearchDropdown;
