import React from "react";
import { Button, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import { handleDeleteFeilds } from "../../Redux/formSlice";
import Swal from "sweetalert2";
const DeleteFeildButton = ({ index }) => {
  const dispatch = useDispatch();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const deleteToast = () => {
    Toast.fire({
      icon: "error",
      title: "Field Deleted successfully",
    });
  };
  return (
    <>
      <Label htmlFor="delete-button" className="form-label">
        Delete
      </Label>
      <div>
        <Button
          type="button"
          outline={true}
          color="danger"
          onClick={() => {
            dispatch(handleDeleteFeilds({ index: index }));
            deleteToast();
          }}
        >
          X
        </Button>
      </div>
    </>
  );
};

export default DeleteFeildButton;
