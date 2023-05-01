import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  handleAddInputField,
  handleAddSelectField,
  handleAddRadioField,
  handleSubmitForm,
} from "../../Redux/formSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const ButtonsGroup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formField = useSelector((state) => state.formFields);
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
  const successToast = () => {
    Toast.fire({
      icon: "success",
      title: "Field Added successfully",
    });
  };

  const submitAlert = () => {
    if (formField.length !== 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Form Created Successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/newform");
        dispatch(handleSubmitForm());
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Add Fields",
        showConfirmButton: true,
        // timer: 1000,
      });
    }
  };
  return (
    <Container className="shadow p-4 rounded-3">
      <div className="text-center mb-4">
        <h2>Generate Dynamic Form Here</h2>
        <p>Click on any button to create field based on that</p>
      </div>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button
            color="success"
            outline={true}
            onClick={() => {
              dispatch(handleAddInputField());
              successToast();
            }}
          >
            Text Field
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button
            color="success"
            outline={true}
            onClick={() => {
              dispatch(handleAddSelectField());
              successToast();
            }}
          >
            Drop Down
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button
            color="success"
            outline={true}
            onClick={() => {
              dispatch(handleAddRadioField());
              successToast();
            }}
          >
            Radio Button
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button type="button" color="success" onClick={() => submitAlert()}>
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonsGroup;
