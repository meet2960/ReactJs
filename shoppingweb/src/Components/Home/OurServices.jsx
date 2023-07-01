import React from "react";
import { Col, Container, Row } from "reactstrap";

const OurServices = () => {
  const ourServicesData = [
    {
      icon: "bi bi-send-check-fill fs-35",
      title: "Fast and Secure Delivery",
      description: "Tell about your service",
    },
    {
      icon: "bi bi-patch-check-fill fs-35",
      title: "Money Back Guarantee",
      description: "Within 10 days",
    },
    {
      icon: "bi bi-arrow-left-square-fill fs-35",
      title: "24 Hour Return Policy",
      description: "No question ask",
    },
    {
      icon: "bi bi-question-octagon-fill fs-35",
      title: "Pro Quality Support",
      description: "24/7 Live support",
    },
  ];
  return (
    <React.Fragment>
      <section className="my-5">
        <Container className="services">
          <Row className="row-cols-xl-4 row-cols-sm-2 row-cols-1 gy-4 gy-xl-0">
            {ourServicesData &&
              ourServicesData.length !== 0 &&
              ourServicesData.map((items, index) => {
                return (
                  <Col key={index}>
                    <Row className="align-items-center">
                      <Col xs={"auto"}>
                        <i className={items.icon}></i>
                      </Col>
                      <Col>
                        <h6>{items.title}</h6>
                        <p className="mb-0 fs-14">{items.description}</p>
                      </Col>
                    </Row>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default OurServices;
