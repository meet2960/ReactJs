import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const GoBack = () => {
  const navigate = useNavigate();
  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <Button color={"warning"} onClick={(e) => goBack(e)}>
        Go Back
      </Button>
    </>
  );
};

export default GoBack;
