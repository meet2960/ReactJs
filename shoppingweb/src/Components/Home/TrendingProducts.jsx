import React, { useContext } from "react";
import { CurrenctContext } from "../../Context/CurrencyContext";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import RatingsStars from "../Common/RatingsStars";
import CommonHeading from "../Common/CommonHeading";

const TrendingProducts = ({ productData }) => {
  const { formatCurrency } = useContext(CurrenctContext);
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
                      <div className="fs-16 trending-content overflow-hidden text-center position-relative">
                        <div className="trending-img d-flex justify-content-center">
                          <img src={items.thumbnail} alt={items.title} />
                        </div>
                        <div className="px-4 py-3">
                          <div className="fs-12">
                            {items.category.toUpperCase()}
                          </div>
                          <h5 className="mb-0 text-truncate">
                            {items.title.toUpperCase()}
                          </h5>
                          <p className="mb-0">
                            <RatingsStars
                              getRatings={items.rating}
                              size={"fs-12"}
                            />
                          </p>
                          <div className="fw-semibold my-2">
                            <span>{formatCurrency(items.price)}</span>
                          </div>
                        </div>
                        <div className="position-absolute sale">
                          <span className="badge bg-dark">Sale</span>
                        </div>
                      </div>
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
