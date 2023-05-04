import React, {useState} from 'react';
import {getAllNotes} from "../Redux/notesSlice";
import {useSelector} from "react-redux";
import {Col, Row} from "reactstrap";

const SearchNote = () => {
    const [searchItem, setSearchItem] = useState("")
    const [filteredNote, setFilteredNote] = useState([])
    const notes = useSelector(getAllNotes)
    const handleChange = (e) => {
        e.preventDefault()
        setSearchItem(e.target.value)
    }
    const handleFindNote = (e) => {
        e.preventDefault()
        if (searchItem !== "") {
            let tempNotes = notes.filter(items =>
                items.noteTitle.toLowerCase().includes(searchItem)
            )
            setFilteredNote(tempNotes)
        }
    }

    return (
        <div>
            <h3 className="text-center mb-5">Searched Notes Will Appear here</h3>
            <Row>
                <Col lg={6}>
                    <input type="text" placeholder="Search Here" className="form-control" value={searchItem}
                           onChange={(e) => handleChange(e)}/>
                </Col>
                <Col>
                    <button type="button" className="btn btn-success" onClick={(e) => handleFindNote(e)}>Search Note
                    </button>
                </Col>
            </Row>
            <div className="my-5">
                <Row>
                    {filteredNote && filteredNote.length !== 0 ? (
                        filteredNote.map((items, index) => {
                            return <Col key={index}>
                                <div className="shadow rounded-3">
                                    <div className="notes-title p-4">
                                        <h2>{items.noteTitle}</h2>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-justify">{items.noteContent}</p>
                                        <div className="d-flex justify-content-end">
                                            <button
                                                className="btn btn-success"
                                                type="button"
                                                // onClick={(e) => navigate("/home")}
                                            >
                                                Go Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        })
                    ) : null}
                </Row>
            </div>
        </div>
    );
};

export default SearchNote