import { configureStore } from "@reduxjs/toolkit";

import movieListReducer from "./movieList-slice";
import movieDetailReducer from "./movieDetail-slice";
import uiReducer from "./ui-slice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    movieDetail: movieDetailReducer,
    ui: uiReducer,
  },
});
export default store;
