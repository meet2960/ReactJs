import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import TextField from "./TextField";
import DropDown from "./DropDown";
import RadioField from "./RadioField";
const CreateFields = () => {
  const formField = useSelector((state) => state.formFields);
  return (
    <Container className="my-4">
      {formField &&
        formField.map((items, index) => {
          if (items.category === "inputField") {
            return <TextField key={index} items={items} index={index} />;
          } else if (items.category === "selectField") {
            return <DropDown key={index} items={items} index={index} />;
          } else if (items.category === "radioField") {
            return <RadioField key={index} items={items} index={index} />;
          } else {
            return null;
          }
        })}
    </Container>
  );
};

export default CreateFields;
