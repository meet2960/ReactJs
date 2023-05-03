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
    return <div className="not-found">No Notes Found, Please add one </div>;
  }
  return (
    <div>
      <h3 className="fw-semibold border-bottom py-2 mb-4">Notes List</h3>
      <Row>
        {notes &&
          notes.map((items, index) => {
            return (
              <Col xs={4} key={index}>
                <Card>
                  <div className="notes-title">{items.noteTitle}</div>
                  <CardBody>
                    <div>{items.noteContent}</div>
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
                        <NavLink className="note-read">Read More</NavLink>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default NoteList;
