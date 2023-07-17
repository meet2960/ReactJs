import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  notes: [
    {
      noteId: "5c30ed37-020b-4c06-8b59-d4aea264b887",
      noteTitle: "React",
      noteContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      noteDate: "2023-05-03T16:54:41.994Z",
    },
  ],
  todoList: [
    {
      todoId: "e4296fca-64c1-4a6a-9f61-0ce33c6879aa",
      todoTitle: "Complete React Js",
      isCompleted: false,
    },
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
      newNote.noteDate = new Date().toISOString();
      state.notes.push(newNote);
      console.log("Added Note", newNote);
    },
    removeNotes: (state, action) => {
      let tempId = action.payload;
      let tempNotes = state.notes.filter((items) => items.noteId !== tempId);
      state.notes = tempNotes;
      console.log(tempNotes);
    },
    editNotes: (state, action) => {
      const { noteId, noteTitle, noteContent } = action.payload;
      const existingPost = state.notes.find(
        (items, index) => items.noteId === noteId
      );
      if (existingPost) {
        existingPost.noteTitle = noteTitle;
        existingPost.noteContent = noteContent;
        existingPost.noteDate = new Date().toISOString();
      }
      /* const tempNotes = state.notes.map((note) => {
        if (note.noteId === noteId) {
          note.noteTitle = noteTitle;
          note.noteContent = noteContent;
          note.noteDate = new Date().toISOString();
        }
        return note;
      });
      state.notes = tempNotes; */
    },
    addTodo: (state, action) => {
      const { todoTitle, isCompleted } = action.payload;
      let todoId = uuid();
      let newTodo = { todoId, todoTitle, isCompleted };
      console.log("Created Object", newTodo);
      state.todoList.push(newTodo);
    },
    toggleTodo: (state, action) => {
      console.log("Inside Toggle Todo", action.payload);
      const findTodo = state.todoList.find(
        (items, index) => items.todoId === action.payload
      );
      console.log("Find Todo", findTodo);
      /*      if (findTodo) {
        findTodo.isCompleted = !findTodo.isCompleted;
      }
      console.log("Updated Toggle Todo", findTodo); */
    },
  },
});

export const { addNotes, removeNotes, editNotes, addTodo, toggleTodo } =
  noteSlice.actions;
export const getAllNotes = (state) => state.notes.notes;
export const getAllTodos = (state) => state.notes.todoList;
export default noteSlice.reducer;
