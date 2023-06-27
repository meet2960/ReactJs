import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Col, Container, Row } from "reactstrap";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={4}>
            <div className="position-sticky ">
              <SideBar />
            </div>
          </Col>
          <Col lg={8}>
            <Navbar />
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainLayout;
