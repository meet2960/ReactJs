import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  notes: [
    /*  {
      noteId: "5c30ed37-020b-4c06-8b59-d4aea264b887",
      noteTitle: "React",
      noteContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      noteDate: "2023-05-03T16:54:41.994Z",
    }, */
  ],
};
const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      const { noteTitle, noteContent } = action.payload;
      let noteId = uuid();
      let newNote = { noteId, noteTitle, noteContent };
      // newNote.noteDate = new Date().toISOString();
      newNote.noteDate = new Date().toLocaleString();
      state.notes.push(newNote);
      console.log("New Note", newNote);
    },
    removeNotes: (state, action) => {
      let tempId = action.payload;
      let tempNotes = state.notes.filter((items) => items.noteId !== tempId);
      state.notes = tempNotes;
      console.log(tempNotes);
    },
    editNotes: (state, action) => {
      const { noteId, noteTitle, noteContent } = action.payload;
      const tempNotes = state.notes.map((note) => {
        if (note.noteId === noteId) {
          note.noteTitle = noteTitle;
          note.noteContent = noteContent;
          note.noteDate = new Date().toLocaleString();
        }
        return note;
      });
      state.notes = tempNotes;
    },
  },
});

export const { addNotes, removeNotes, editNotes } = noteSlice.actions;
export const getAllNotes = (state) => state.notes;
export default noteSlice.reducer;
