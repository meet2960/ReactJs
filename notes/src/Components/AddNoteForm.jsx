import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../Redux/notesSlice";
import { Col, Row, Label, Input } from "reactstrap";
import { CustomToast } from "../utils/Toast";
const AddNoteForm = () => {
  const dispatch = useDispatch();
  const [noteInput, setNoteInput] = useState({
    noteTitle: "",
    noteContent: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
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
    dispatch(addNotes(noteInput));
    CustomToast({
      title: "Note Added successfully",
      icon: "success",
      timerProgressBar: true,
      timer: 1000,
      position: "top-right",
      showConfirmButton: false,
    });
    setNoteInput({ noteTitle: "", noteContent: " " });
  };
  return (
    <div className="main-content">
      <h2>Add Note Here</h2>
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
                  value={noteInput.noteTitle}
                  onChange={handleChange}
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
                  value={noteInput.noteContent}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </Col>
              <Col lg={12}>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={(e) => handleAddNote(e)}
                >
                  Add Note
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddNoteForm;
