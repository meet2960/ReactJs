import React from "react";
import { Container } from "reactstrap";

const ErrorPage = () => {
  return (
    <Container fluid={true}>
      <div className="d-flex flex-column justify-content-center align-items-center p-5 secondary-text ">
        <h1>404</h1>
        <p className="mb-0">Page not Found</p>
      </div>
    </Container>
  );
};

export default ErrorPage;
