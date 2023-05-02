import React from "react";
import { Container } from "reactstrap";

const ErrorPage = () => {
  return (
    <Container
      fluid={true}
      className="flex-grow-1 d-flex justify-content-center align-items-center"
    >
      <div className="secondary-text text-center">
        <h2 className="error-page">404</h2>
        <p className="mb-0">Page not Found</p>
      </div>
    </Container>
  );
};

export default ErrorPage;
