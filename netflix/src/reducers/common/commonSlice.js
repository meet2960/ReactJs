import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionsLoading: false,
  error: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    startCall: (state, action) => {},
    endCall: (state, action) => {},
  },
});
