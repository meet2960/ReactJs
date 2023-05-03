import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotes, editNotes } from "../Redux/notesSlice";
import { useParams } from "react-router-dom";
import { CustomToast } from "../utils/Toast";
import { Row, Col, Label, Input } from "reactstrap";
const EditNoteForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector(getAllNotes);
  const selectedNote = notes.filter((items) => items.noteId === id);
  const [formData, setFormData] = useState(selectedNote[0]);

  const handleFormDataChange = (e) => {
    e.preventDefault();
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleEditNote = (e) => {
    e.preventDefault();
    dispatch(editNotes(formData));
    CustomToast({
      title: "Note Edited successfully",
      icon: "success",
      timerProgressBar: true,
      timer: 1000,
      position: "top-right",
      showConfirmButton: false,
    });
    setFormData({ noteTitle: "", noteContent: " " });
  };
  return (
    <div className="main-content">
      <h2>Edit Note Here</h2>
      <Row>
        <Col lg={8}>
          <form action="">
            <Row className="gy-4">
              <Col lg={12}>
                <Label htmlFor="title" className="fw-semibold">
                  Title
                </Label>
                <Input
                  id="title"
                  type="text"
                  className="form-control"
                  name="noteTitle"
                  placeholder="Enter Title"
                  value={formData.noteTitle}
                  onChange={(e) => handleFormDataChange(e)}
                />
              </Col>
              <Col lg={12}>
                <Label htmlFor="description" className="fw-semibold">
                  Description
                </Label>
                <textarea
                  rows="5"
                  type="text"
                  id="description"
                  className="form-control"
                  name="noteContent"
                  placeholder="Enter Description"
                  value={formData.noteContent}
                  onChange={(e) => handleFormDataChange(e)}
                ></textarea>
              </Col>
              <Col lg={12}>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={(e) => handleEditNote(e)}
                >
                  Save Note
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default EditNoteForm;
