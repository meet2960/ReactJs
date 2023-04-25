import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import TextField from "./Components/TextField";
import { handleAddInputField, handleAddSelectField } from "../Redux/formSlice";
import DropDown from "./Components/DropDown";
const CreateForm = () => {
  const formField = useSelector((state) => state.formFields);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Inside TextField", formField);
  }, [formField]);
  return (
    <Container fluid={true}>
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
              onClick={() => dispatch(handleAddInputField())}
            >
              Text Field
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button
              color="success"
              outline={true}
              onClick={() => dispatch(handleAddSelectField())}
            >
              Drop Down
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button color="success" outline={true}>
              Radio Button
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        {formField &&
          formField.map((items, index) => {
            if (items.category === "inputfield") {
              return <TextField key={index} items={items} index={index} />;
            } else if (items.category === "selectField") {
              return <DropDown key={index} items={items} index={index} />;
            }
          })}
      </Container>
    </Container>
  );
};

export default CreateForm;
