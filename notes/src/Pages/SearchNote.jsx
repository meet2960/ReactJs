import React, { useEffect, useState } from "react";
import { getAllNotes, removeNotes } from "../Redux/notesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Col, Row } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import GoBack from "../Components/GoBack";
import { ImCancelCircle } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import CommonHeading from "../Components/CommonHeading";
import { CustomToast } from "../utils/Toast";

const SearchNote = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNote, setFilteredNote] = useState(null);
  const notes = useSelector(getAllNotes);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchNote = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      let tempNotes = notes.filter((items) =>
        items.noteTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNote(tempNotes);
      console.log("Filtered Notes are : ", filteredNote);
    } else {
      CustomToast({
        title: "Please Enter Search Term",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <CommonHeading key={"Search"} title={"Search Note"} />
      <Row className="mt-5">
        <Col lg={8} className="mx-auto">
          <Row>
            <Col>
              <input
                type="text"
                placeholder="Search Here"
                className="form-control"
                value={searchTerm}
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col xs={"auto"}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => handleSearchNote(e)}
              >
                Search
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="my-5">
        <Row className="g-3">
          {filteredNote && filteredNote.length >= 1
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
          {filteredNote && filteredNote.length <= 0 && (
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
