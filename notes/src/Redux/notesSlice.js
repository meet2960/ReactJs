import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  notes: [
    {
      noteId: "3463022b-7e7e-439c-aeb6-f03c58c0ccb3",
      noteTitle: "Dummy Note",
      noteContent:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus autem inventore accusantium eveniet dolorum dicta sunt cum ratione, tenetur beatae similique ad, corrupti, blanditiis mollitia. Id quidem culpa ex, eos harum, labore reprehenderit natus aperiam veniam perferendis doloremque omnis nihil neque quis molestias voluptates aliquid. Repellendus autem ipsam sequi inventore.",
      noteDate: "2023-07-18T10:29:54.916Z",
    },
  ],
  todoList: [
    {
      todoId: "e4296fca-64c1-4a6a-9f61-0ce33c6879aa",
      todoTitle: "Complete React Js",
      isCompleted: false,
    },
    {
      todoId: "e4296fca-64c1-4a6a-9f61-0ce33c687bb",
      todoTitle: "Complete Node Js",
      isCompleted: false,
    },
    {
      todoId: "e4296fca-64c1-4a6a-9f61-0ce33c6879cc",
      todoTitle: "Complete MySql",
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
    },
    removeNotes: (state, action) => {
      console.log("Inside Delete Note Function");
      const { id } = action.payload;
      console.log("Received Id", id);
      const findNote = state.notes.filter((items) => items.noteId !== id);
      console.log("Find Note", findNote);
      state.notes = findNote;
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
      state.todoList.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const findTodo = state.todoList.find(
        (items, index) => items.todoId === id
      );
      if (findTodo) {
        findTodo.isCompleted = !findTodo.isCompleted;
      }
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      const findTodo = state.todoList.filter((items) => items.todoId !== id);
      state.todoList = findTodo;
    },
  },
});

export const {
  addNotes,
  removeNotes,
  editNotes,
  addTodo,
  toggleTodo,
  removeTodo,
} = noteSlice.actions;
export const getAllNotes = (state) => state.notes.notes;
export const getAllTodos = (state) => state.notes.todoList;
export default noteSlice.reducer;
