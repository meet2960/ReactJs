import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTrending: [],
  topRated: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    currentTrendingList: (state, action) => {
      state.currentTrending = action.payload;
    },
    topRatedList: (state, action) => {
      state.topRated = action.payload;
    },
  },
});
