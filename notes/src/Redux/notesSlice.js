import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};
const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      console.log("Inside Function");
      console.log("Data", action.payload);
      state.notes.push(action.payload);
    },
  },
});

export const { addNotes } = noteSlice.actions;
export default noteSlice.reducer;
