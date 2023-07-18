import React from "react";
import AddNoteForm from "../Components/Notes/AddNoteForm";
import CommonHeading from "../Components/CommonHeading";
const AddNote = () => {
  return (
    <React.Fragment>
      <CommonHeading key={"Newnote"} title={"Add New Note"} />
      <AddNoteForm />
    </React.Fragment>
  );
};

export default AddNote;
