import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { uiActions } from "../store/ui-slice";

import Logo from "../ui/Logo";
import SearchField from "../components/SearchField/SearchField";
import { HomePageContainer } from "./HomePage.styles";
import MovieGallery from "../components/MovieGallery/MovieGallery";

const HomePage = () => {
  const dispatch = useDispatch();

  const isGalleryOpen = useSelector(
    (state: RootState) => state.ui.showSearchReultGallery
  );

  const searhResult = useSelector(
    (state: RootState) => state.movieList.movieList.searchList
  );

  useEffect(() => {
    dispatch(uiActions.showSearchResultGallery(false));
  }, []);

  return (
    <HomePageContainer>
      <Logo hasText={true} color={"black"} size={150} />
      <SearchField />
      {isGalleryOpen && <MovieGallery list={searhResult} />}
    </HomePageContainer>
  );
};

export default HomePage;
