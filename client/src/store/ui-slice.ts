import { createSlice } from "@reduxjs/toolkit";

const uiInitialSate = {
  showSearchReultGallery: false,
  showSearchDropdown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialSate,
  reducers: {
    showSearchResultGallery: (state, action) => {
      state.showSearchReultGallery = action.payload;
    },
    showSearchDropdown: (state, action) => {
      state.showSearchDropdown = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
