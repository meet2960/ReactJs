import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import ButtonsGroup from "./Components/ButtonsGroup";
import CreateFields from "./Components/CreateFields";
const CreateForm = () => {
  const formField = useSelector((state) => state.formFields);
  useEffect(() => {
    console.log("Inside TextField", formField);
  }, [formField]);
  return (
    <Container fluid={true}>
      <ButtonsGroup />
      <CreateFields />
    </Container>
  );
};

export default CreateForm;
