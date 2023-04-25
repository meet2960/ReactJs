import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { handleDeleteFeilds } from "../../Redux/formSlice";
const DeleteFeildButton = ({ index }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        type="button"
        outline={true}
        color="danger"
        onClick={() => dispatch(handleDeleteFeilds({ index: index }))}
      >
        X
      </Button>
    </>
  );
};

export default DeleteFeildButton;
