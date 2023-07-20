import React from "react";
import { Container } from "reactstrap";

const ErrorHandlingPage = () => {
  return (
    <Container fluid>
      <div className="d-flex justify-content-center align-items-center">
        <h1>
          Oops.... Something Went Wrong, Please Refresh the page to try again
        </h1>
      </div>
    </Container>
  );
};

export default ErrorHandlingPage;
