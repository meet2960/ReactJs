import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import ProductsImageSlider from "../Components/Productdetail/ProductsImageSlider";
import ItemDetail from "../Components/Productdetail/ItemDetail";
import ItemDetailsTabs from "../Components/Productdetail/ItemDetailsTabs";

const ShowProductDetail = () => {
  const productList = useSelector((state) => state.product.products);
  // const { id } = useParams();
  const id = 2;
  const selectedProduct = productList.find(
    (items) => items.id === parseInt(id)
  );
  console.log("getSelectedProduct is : ", selectedProduct);
  return (
    <Container className="product-details">
      <div className="mt-5">
        {selectedProduct ? (
          <>
            <Row>
              <Col lg={5}>
                <ProductsImageSlider selectedProduct={selectedProduct} />
              </Col>
              <Col lg={7}>
                <ItemDetail selectedProduct={selectedProduct} />
              </Col>
            </Row>
          </>
        ) : (
          <div>No Product Found</div>
        )}
      </div>
      <div className="items-tabs mt-5">
        <ItemDetailsTabs />
      </div>
    </Container>
  );
};

export default ShowProductDetail;
