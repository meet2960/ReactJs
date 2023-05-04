import React from "react";
import { useSelector } from "react-redux";
import { getAllNotes } from "../Redux/notesSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoBack from "../Components/GoBack";
const ViewSingleNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notes = useSelector(getAllNotes);
  const selectedNote = notes.filter((items) => items.noteId === id);
  return (
    <div className="shadow rounded-3">
      <div className="notes-title p-4">
        <h2>{selectedNote[0].noteTitle}</h2>
      </div>
      <div className="p-5">
        <p className="text-justify">{selectedNote[0].noteContent}</p>
        <div className="d-flex justify-content-end">
            <GoBack />
        </div>
      </div>
    </div>
  );
};

export default ViewSingleNote;