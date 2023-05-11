import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Loader from "../Common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../Redux/product/action";

const ProductList = () => {
  const dispatch = useDispatch();
  const { productData, actionLoading } = useSelector((state) => ({
    productData: state.product.products,
    actionLoading: state.common.actionsLoading,
  }));
  useEffect(() => {
    dispatch(getProductList());
    console.log("Loading State is", actionLoading);
  }, [dispatch]);
  return (
    <div>
      <Container>
        {actionLoading && <Loader />}
        <Container fluid>
          <Row>
            {productData &&
              productData.length !== 0 &&
              productData.map((items, index) => (
                <React.Fragment key={index}>
                  <Col>
                    <h3>{items.title}</h3>
                  </Col>
                </React.Fragment>
              ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default ProductList;