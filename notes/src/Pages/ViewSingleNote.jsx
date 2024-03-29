import React from "react";
import { useSelector } from "react-redux";
import { getAllNotes } from "../Redux/notesSlice";
import { useParams } from "react-router-dom";
import GoBack from "../Components/GoBack";
const ViewSingleNote = () => {
  const { id } = useParams();
  const notes = useSelector(getAllNotes);
  const selectedNote = notes.find((items) => items.noteId === id);
  return (
    <div className="shadow rounded-3">
      <div className="notes-title p-4">
        <h2>{selectedNote.noteTitle}</h2>
      </div>
      <div className="p-4">
        <p className="text-justify">{selectedNote.noteContent}</p>
        <div className="d-flex justify-content-end mt-4">
          <GoBack />
        </div>
      </div>
    </div>
  );
};

export default ViewSingleNote;
