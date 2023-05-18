import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Loader from "../Common/Loader";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = ({ actionLoading, productData }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    console.log("Cart Items", cartItems);
  }, [cartItems]);
  return (
    <React.Fragment>
      <Container>
        {actionLoading && <Loader />}
        <Container fluid>
          <Row className="g-4">
            {productData &&
              productData.length !== 0 &&
              productData.slice(0, 8).map((items, index) => (
                <React.Fragment key={index}>
                  <Col xs={12} md={6} xl={3}>
                    <ProductCard items={items} />
                  </Col>
                </React.Fragment>
              ))}
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default ProductList;
