import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionsLoading: false,
};
export const callTypes = {
  list: "list",
  action: "action",
};

export const commonSlices = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    startCall: (state, action) => {
      state.error = "";
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    endCall: (state, action) => {
      state.error = "";
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
  },
});

export const { startCall, endCall } = commonSlices.actions;