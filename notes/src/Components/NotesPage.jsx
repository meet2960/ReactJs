import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../Redux/notesSlice";
const NotesPage = () => {
  const dispatch = useDispatch();
  const [noteInput, setNoteInput] = useState({
    noteTitle: "",
    noteContent: "",
  });
  console.log("noteTitle", noteInput.noteTitle);
  console.log("noteContent", noteInput.noteContent);
  const handleChange = (e) => {
    setNoteInput((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
    // setNoteInput({ ...noteInput, [e.target.name]: e.target.value });
  };
  const handleAddNote = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main-content">
      <h2>Add Note Here</h2>
      <form action="">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              name="noteTitle"
              placeholder="Enter Title"
              value={noteInput.noteTitle}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              name="noteContent"
              placeholder="Enter Description"
              value={noteInput.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <button
              type="button"
              className="btn btn-success"
              onClick={(e) => handleAddNote(e)}
            >
              Add Note
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NotesPage;
