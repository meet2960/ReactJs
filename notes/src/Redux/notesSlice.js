import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  notes: [],
};
const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      const { noteTitle, noteContent } = action.payload;
      let noteId = uuid();
      let newNote = { noteId, noteTitle, noteContent };
      newNote.noteDate = new Date().toISOString();
      state.notes.push(newNote);
      console.log("New Note", newNote);
    },
  },
});

export const { addNotes } = noteSlice.actions;
export default noteSlice.reducer;
