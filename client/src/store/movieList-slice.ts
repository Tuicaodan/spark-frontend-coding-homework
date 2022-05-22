import { createSlice } from "@reduxjs/toolkit";

import { MovieList } from "../types/movie-types";

const initialMovieListState = {
  movieList: {
    loadPage: 1,
    searchList: [],
    recommendedList: [],
  } as MovieList,
};

const movieListSlice = createSlice({
  name: "movie",
  initialState: initialMovieListState,
  reducers: {
    setSearchList: (state, action) => {
      state.movieList.searchList = action.payload;
    },
    addToSearchList: (state, action) => {
      state.movieList.searchList = [
        ...state.movieList.searchList,
        ...action.payload,
      ];
    },
    updateLoadedPage: (state, action) => {
      state.movieList.loadPage = state.movieList.loadPage + action.payload;
    },
    setRecommendedList: (state, action) => {
      state.movieList.recommendedList = action.payload;
    },
  },
});

export const movieListActions = movieListSlice.actions;

export default movieListSlice.reducer;
