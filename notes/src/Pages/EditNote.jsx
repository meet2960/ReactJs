import React from "react";
import EditNoteForm from "../Components/Notes/EditNoteForm";
import CommonHeading from "../Components/CommonHeading";

const EditNote = () => {
  return (
    <React.Fragment>
      <CommonHeading key={"Editnote"} title={"Edit Note"} />
      <EditNoteForm />
    </React.Fragment>
  );
};

export default EditNote;
