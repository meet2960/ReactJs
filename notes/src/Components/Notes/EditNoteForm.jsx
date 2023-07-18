import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotes, editNotes } from "../../Redux/notesSlice";
import { useParams, useNavigate } from "react-router-dom";
import { CustomToast } from "../../utils/Toast";
import { Row, Col, Label, Input } from "reactstrap";
const EditNoteForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notes = useSelector(getAllNotes);
  const selectedNote = notes.find((items) => items.noteId === id);
  const [formData, setFormData] = useState(selectedNote);
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
    });
    setFormData({ noteTitle: "", noteContent: " " });
    navigate("/");
  };
  return (
    <React.Fragment>
      <Row>
        <Col lg={8} className="mx-auto">
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
              <Col lg={12} className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => handleEditNote(e)}
                >
                  Save Note
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EditNoteForm;
