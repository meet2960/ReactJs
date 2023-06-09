import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import CommonHeading from "../Common/CommonHeading";
import CommonProductCard from "../Common/CommonProductCard";

const TrendingProducts = ({ productData }) => {
  return (
    <React.Fragment>
      <section className="trending-products mb-5  ">
        <Container>
          <CommonHeading heading={"Trending Products"} />
          <Row className="gy-4">
            {productData &&
              productData.lenght !== 0 &&
              productData.slice(8, 16).map((items, index) => (
                <React.Fragment key={index}>
                  <Col md={6} xl={3}>
                    <NavLink to={`/productdetails/${items.id}`}>
                      <CommonProductCard items={items} />
                    </NavLink>
                  </Col>
                </React.Fragment>
              ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TrendingProducts;
