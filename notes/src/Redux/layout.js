import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layoutModeType: "light",
};

export const LayoutSlices = createSlice({
  name: "Layout",
  initialState: initialState,
  reducers: {
    changeLayoutMode: (state, action) => {
      state.layoutModeType = action.payload;
    },
  },
});

export const { changeLayoutMode } = LayoutSlices.actions;
export default LayoutSlices.reducer;
