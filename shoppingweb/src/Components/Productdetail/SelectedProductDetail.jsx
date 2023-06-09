import React from "react";
import { Col, Row } from "reactstrap";
import ProductsImageSlider from "./ProductsImageSlider";
import ItemDetail from "./ItemDetail";

const SelectedProductDetail = ({ selectedProduct }) => {
  return (
    <React.Fragment>
      <section className="mt-5">
        <Row>
          <Col lg={6} xl={5}>
            <ProductsImageSlider selectedProduct={selectedProduct} />
          </Col>
          <Col lg={6} xl={7}>
            <ItemDetail selectedProduct={selectedProduct} />
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
};

export default SelectedProductDetail;
