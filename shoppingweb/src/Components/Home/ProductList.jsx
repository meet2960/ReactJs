import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Loader from "../Common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../Redux/product/action";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const { productData, actionLoading } = useSelector((state) => ({
    productData: state.product.products,
    actionLoading: state.common.actionsLoading,
  }));
  useEffect(() => {
    if (productData.length === 0) {
      console.log("Inside Home Api Calling");
      dispatch(getProductList());
    }
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        {actionLoading && <Loader />}
        <Container fluid>
          <Row className="g-4">
            {productData &&
              productData.length !== 0 &&
              productData.map((items, index) => (
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
