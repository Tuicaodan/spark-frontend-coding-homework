import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";

import useHttp from "../../hooks/use-http";
import { movieListActions } from "../../store/movieList-slice";
import { uiActions } from "../../store/ui-slice";
import { SearchFieldContainer, SearchFieldForm } from "./SearchField.styles";
import SearchDropdown from "./SearchDropdown/SearchDropdown";

const SearchField = () => {
  const [enteredText, setEnteredText] = useState("");

  const dispatch = useDispatch();

  const isDropdownOpen = useSelector(
    (state: RootState) => state.ui.showSearchDropdown
  );

  const { isLoading, error, sendRequest: fetchSearchResult } = useHttp();

  const inputHandler = async (searchText: string) => {
    dispatch(uiActions.showSearchDropdown(true));
    dispatch(uiActions.showSearchResultGallery(false));
    setEnteredText(searchText);
  };

  useEffect(() => {
    const searchResult = async () => {
      const endpoint = process.env.REACT_APP_API_BASE_URL
        ? process.env.REACT_APP_API_BASE_URL
        : "http://localhost:8080/api";

      const data = await fetchSearchResult({
        url: endpoint + `/movies?title=${enteredText}&page=1`,
      });
      dispatch(movieListActions.setSearchList(data));
    };

    if (enteredText.trim().length > 0) {
      const searchTimer = setTimeout(() => {
        searchResult();
      }, 500);
      return () => clearTimeout(searchTimer);
    }
  }, [enteredText]);

  const handleSearchSubmission = (event: any) => {
    event.preventDefault();
    dispatch(uiActions.showSearchDropdown(false));
    dispatch(uiActions.showSearchResultGallery(true));
  };

  return (
    <SearchFieldContainer>
      <SearchFieldForm onSubmit={handleSearchSubmission}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => inputHandler(e.target.value)}
          value={enteredText}
        />
        {enteredText.trim().length > 0 && isDropdownOpen && (
          <SearchDropdown isLoading={isLoading} error={error} />
        )}
        <button type="submit">Search</button>
      </SearchFieldForm>
    </SearchFieldContainer>
  );
};

export default SearchField;
