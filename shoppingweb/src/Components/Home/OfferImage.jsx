import React from "react";
import { Col, Container, Row } from "reactstrap";

const OfferImage = () => {
  return (
    <React.Fragment>
      <section className="mb-5">
        <div className="banner-bg">
          <Container>
            <Row className="gy-3 gy-md-0">
              <Col md={6}>
                <div className="banner-bg-1 p-4 text-end rounded-2">
                  <h5>New Arrivals</h5>
                  <h3 className="py-3 border-bottom">Sports Outfit</h3>
                  <div>
                    From <span>$150</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="banner-bg-2 p-4 text-white rounded-2">
                  <h5 className="text-white">SmartWatches</h5>
                  <h3 className="py-3 border-bottom text-white">
                    Sale up to 20% Off
                  </h3>
                  <div>
                    Starting From <span>$200</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OfferImage;
