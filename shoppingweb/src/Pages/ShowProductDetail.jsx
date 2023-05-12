import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsImageSlider from "../Components/Productdetail/ProductsImageSlider";
import ItemDetail from "../Components/Productdetail/ItemDetail";

const ShowProductDetail = () => {
  const productList = useSelector((state) => state.product.products);
  const { id } = useParams();
  const selectedProduct = productList.find(
    (items) => items.id === parseInt(id)
  );
  console.log("getSelectedProduct is : ", selectedProduct);
  return (
    <Container>
      <Card className="mt-3">
        <CardBody>
          <div className="p-3 product-details rounded-3">
            {selectedProduct ? (
              <Row>
                <Col lg={5}>
                  <ProductsImageSlider selectedProduct={selectedProduct} />
                </Col>
                <Col lg={7}>
                  <ItemDetail selectedProduct={selectedProduct} />
                </Col>
              </Row>
            ) : (
              <div>No Product Found</div>
            )}
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ShowProductDetail;
