import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SelectedProductDetail from "../../Components/Productdetail/SelectedProductDetail";
import ProductDetailsTabs from "../../Components/Productdetail/ProductDetailsTabs";
import RelatedProducts from "../../Components/Productdetail/RelatedProducts";

const ShowProductDetail = () => {
  const productList = useSelector((state) => state.product.products);
  const { id } = useParams();
  // const id = 9;
  const selectedProduct = productList.find(
    (items) => items.id === parseInt(id)
  );
  console.log("getSelectedProduct is : ", selectedProduct);
  return (
    <section>
      <Container className="product-details">
        {selectedProduct ? (
          <React.Fragment>
            <SelectedProductDetail selectedProduct={selectedProduct} />
            <ProductDetailsTabs selectedProduct={selectedProduct} />
            <RelatedProducts />
          </React.Fragment>
        ) : (
          <div>No Product Found</div>
        )}
      </Container>
    </section>
  );
};

export default ShowProductDetail;