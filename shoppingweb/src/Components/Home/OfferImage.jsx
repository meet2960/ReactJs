import React, { useContext } from "react";
import { Col, Container, Row } from "reactstrap";
import { CurrenctContext } from "../../context/CurrencyContext";

const OfferImage = () => {
  const { formatCurrency } = useContext(CurrenctContext);
  return (
    <React.Fragment>
      <section className="mb-5">
        <div className="banner-bg">
          <Container>
            <Row className="gy-3 gy-lg-0">
              <Col lg={6}>
                <div className="banner-bg-1 p-4 text-md-end rounded-2">
                  <h5>New Arrivals</h5>
                  <h3 className="py-3">Sports Outfit</h3>
                  <div>
                    From <span>{formatCurrency(150)}</span>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="banner-bg-2 p-4 text-white rounded-2">
                  <h5 className="text-white">SmartWatches</h5>
                  <h3 className="py-3 text-white">Sale up to 20% Off</h3>
                  <div>
                    Starting From <span>{formatCurrency(200)}</span>
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
