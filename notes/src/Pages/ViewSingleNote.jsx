import React from "react";
import { useSelector } from "react-redux";
import { getAllNotes } from "../Redux/notesSlice";
import { useParams } from "react-router-dom";
const ViewSingleNote = () => {
  const { id } = useParams();
  const notes = useSelector(getAllNotes);
  const selectedNote = notes.filter((items) => items.noteId === id);
  return (
    <div>
      <div>
        <h2>{selectedNote[0].noteTitle}</h2>
      </div>
      <div>
        <p>{selectedNote[0].noteContent}</p>
      </div>
    </div>
  );
};

export default ViewSingleNote;
