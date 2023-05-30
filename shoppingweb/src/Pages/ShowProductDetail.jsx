import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import ProductsImageSlider from "../Components/Productdetail/ProductsImageSlider";
import ItemDetail from "../Components/Productdetail/ItemDetail";
import ItemDetailsTabs from "../Components/Productdetail/ItemDetailsTabs";
import { useParams } from "react-router-dom";
import RelatedProducts from "../Components/Productdetail/RelatedProducts";

const ShowProductDetail = () => {
  const productList = useSelector((state) => state.product.products);
  const { id } = useParams();
  // const id = 5;
  const selectedProduct = productList.find(
    (items) => items.id === parseInt(id)
  );
  console.log("getSelectedProduct is : ", selectedProduct);
  return (
    <section>
      <Container className="product-details">
        <div className="mt-5">
          {selectedProduct ? (
            <React.Fragment>
              <Row>
                <Col lg={5}>
                  <ProductsImageSlider selectedProduct={selectedProduct} />
                </Col>
                <Col lg={7}>
                  <ItemDetail selectedProduct={selectedProduct} />
                </Col>
              </Row>
            </React.Fragment>
          ) : (
            <div>No Product Found</div>
          )}
        </div>
        <div className="product-items-tab mt-5">
          <ItemDetailsTabs selectedProduct={selectedProduct} />
        </div>
        <div>
          <RelatedProducts />
        </div>
      </Container>
    </section>
  );
};

export default ShowProductDetail;
