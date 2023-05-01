import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  handleAddInputField,
  handleAddSelectField,
  handleAddRadioField,
  handleSubmitForm,
} from "../../Redux/formSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const ButtonsGroup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const callToast = () => {
    Toast.fire({
      icon: "success",
      title: "Field Added successfully",
    });
  };
  const submitAlert = () => {
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
  };
  return (
    <Container className="shadow p-4 rounded-3 mt-3">
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
              callToast();
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
              callToast();
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
              callToast();
            }}
          >
            Radio Button
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          {/* <NavLink to="newform"> */}
          <Button type="button" color="success" onClick={() => submitAlert()}>
            Submit
          </Button>
          {/* </NavLink> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonsGroup;
