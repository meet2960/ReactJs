import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { handleDeleteFeilds } from "../../Redux/formSlice";
const DeleteFeildButton = ({ index }) => {
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="delete-button" className="form-label">
        Delete
      </label>
      <div>
        <Button
          type="button"
          outline={true}
          color="danger"
          onClick={() => dispatch(handleDeleteFeilds({ index: index }))}
        >
          X
        </Button>
      </div>
    </>
  );
};

export default DeleteFeildButton;
