import React from "react";
import { Col, Row } from "reactstrap";

const AllButtons = () => {
  return (
    <Row className="bg-ligt my-5">
      <Col className="">
        <div className="btn btn-primary">Button</div>
        <div className="btn btn-outline-primary">Outlne</div>
      </Col>
      <Col>
        <div className="btn btn-secondary">Button</div>
        <div className="btn btn-outline-secondary">Outlne</div>
      </Col>
      <Col>
        <div className="btn btn-warning">Button</div>
        <div className="btn btn-outline-warning">Outlne</div>
      </Col>
      <Col>
        <div className="btn btn-success">Button</div>
        <div className="btn btn-outline-success">Outlne</div>
      </Col>
      <Col>
        <div className="btn btn-link">Link Button</div>
        <div className="btn btn-outline-link">Outlne</div>
      </Col>
      <Col>
        <div className="btn btn-info">Button</div>
        <div className="btn btn-outline-info">Outlne</div>
      </Col>
      <Col>
        <div className="btn btn-danger">Button</div>
        <div className="btn btn-outline-danger">Outlne</div>
      </Col>
      <Col>
        <div className="btn btn-light">Button</div>
        <div className="btn btn-outline-light">Button</div>
      </Col>
      <Col>
        <div className="btn btn-dark">Button</div>
        <div className="btn btn-outline-dark">Button</div>
      </Col>
    </Row>
  );
};

export default AllButtons;
