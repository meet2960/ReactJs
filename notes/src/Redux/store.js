import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./notesSlice";
import layoutReducer from "./layout"
export const store = configureStore({
  reducer: {
    notes:noteReducer,
    notesLayout:layoutReducer
  },
});