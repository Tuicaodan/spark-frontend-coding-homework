import { createSlice } from "@reduxjs/toolkit";

import { MovieDetail } from "../types/movie-types";

const defaultMovieDetail = {
  id: 0,
  title: "",
  tagline: "",
  overview: "",
  poster_path: "",
  backdrop_path: "",
  release_date: "",
  runtime: 0,
  vote_average: 0,
  genres: [],
  director: {
    id: 0,
    name: "",
    profile_path: "",
  },
  actors: [],
  recommended: [],
} as MovieDetail;

const initialMovieDetailState = {
  movieDetail: defaultMovieDetail,
};

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: initialMovieDetailState,
  reducers: {
    setMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
  },
});

export const movieDetailActions = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
