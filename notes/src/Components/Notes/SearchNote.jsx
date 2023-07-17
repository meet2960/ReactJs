import React, { useState } from "react";
import { getAllNotes, removeNotes } from "../../Redux/notesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Col, Row } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import GoBack from "../GoBack";
import { ImCancelCircle } from "react-icons/im";
import { FiEdit } from "react-icons/fi";

const SearchNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNote, setFilteredNote] = useState([]);
  const notes = useSelector(getAllNotes);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const handleFindNote = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      let tempNotes = notes.filter((items) =>
        items.noteTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNote(tempNotes);
      console.log("Filtered Notes are : ", filteredNote);
    }
  };

  return (
    <div>
      <h3 className="text-center mb-5">Searched Notes Will Appear here</h3>
      <Row>
        <Col lg={6}>
          <input
            type="text"
            placeholder="Search Here"
            className="form-control"
            value={searchTerm}
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col>
          <button
            type="button"
            className="btn btn-success"
            onClick={(e) => handleFindNote(e)}
          >
            Search Note
          </button>
        </Col>
      </Row>
      <div className="my-5">
        <Row className="g-3">
          {filteredNote && searchTerm.length > 1 && filteredNote.length >= 1
            ? filteredNote.map((items, index) => {
                return (
                  <Col xs={12} md={6} xl={4} key={index}>
                    <Card>
                      <div className="notes-title">{items.noteTitle}</div>
                      <CardBody>
                        <div>
                          <p className="text-justify">
                            {items.noteContent.substring(0, 200) + "..."}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                          <button
                            type="button"
                            className="btn btn-sm btn-danger me-3"
                            onClick={(e) => dispatch(removeNotes(items.noteId))}
                          >
                            <ImCancelCircle />
                          </button>
                          <NavLink to={`/edit/${items.noteId}`}>
                            <button
                              type="button"
                              className="btn btn-sm btn-warning"
                            >
                              <FiEdit />
                            </button>
                          </NavLink>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="notes-date text-capitalize">
                            {items.noteDate}
                            {/* {formatDistanceToNow(parseISO(items.noteDate))} */}
                          </div>
                          <div>
                            <NavLink
                              to={`/note/${items.noteId}`}
                              className="note-read"
                            >
                              Read More
                            </NavLink>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })
            : null}
          {!filteredNote && (
            <div>
              <h2 className="text-center">No Not Found, Please search Again</h2>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default SearchNote;
