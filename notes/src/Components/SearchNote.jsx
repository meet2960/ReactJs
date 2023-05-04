import React, {useState} from 'react';
import {getAllNotes} from "../Redux/notesSlice";
import {useSelector} from "react-redux";
import {Col, Row} from "reactstrap";
import {useNavigate} from "react-router-dom"
import GoBack from "./GoBack";
const SearchNote = () => {
    const navigate = useNavigate()
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
            let tempNotes = notes.find(items =>
                items.noteTitle.toLowerCase().includes(searchItem)
            )
            setFilteredNote(tempNotes)
            console.log(tempNotes)
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
                    {searchItem.length > 1 && filteredNote && filteredNote.length !== 0 ? (
                        filteredNote.map((items, index) => {
                            return <Col key={index}>
                                <div className="shadow rounded-3">
                                    <div className="notes-title p-4">
                                        <h2>{items.noteTitle}</h2>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-justify">{items.noteContent}</p>
                                        <div className="d-flex justify-content-end">
                                           <GoBack />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        })
                    ) : null}
                    {!filteredNote && (<div>
                        <h2 className="text-center">No Not Found, Please search Again</h2>
                    </div>)}
                </Row>
            </div>
        </div>
    );
};

export default SearchNote