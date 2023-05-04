import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { removeNotes } from "../Redux/notesSlice";
import { getAllNotes } from "../Redux/notesSlice";
import { Card, CardBody, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
const NoteList = () => {
  const notes = useSelector(getAllNotes);
  const dispatch = useDispatch();
  console.log("Notes List", notes);
  if (!notes || notes.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="fw-semibold">No Notes Found, Please Add One </h2>
      </div>
    );
  }
  return (
    <>
      <h2 className="fw-semibold border-bottom pb-2 mb-4">Notes List</h2>
      <Row className="g-3">
        {notes &&
          notes.map((items, index) => {
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
          })}
      </Row>
    </>
  );
};

export default NoteList;
