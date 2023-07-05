import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SelectedProductDetail from "../../Components/Productdetail/SelectedProductDetail";
import ProductDetailsTabs from "../../Components/Productdetail/ProductDetailsTabs";
import RelatedProducts from "../../Components/Productdetail/RelatedProducts";

const ShowProductDetail = () => {
  document.title = "Product | Ecommerce";
  const productList = useSelector((state) => state.product.products);
  const { id } = useParams();
  const selectedProduct = productList.find(
    (items) => items.id === parseInt(id)
  );
  console.log("getSelectedProduct is : ", selectedProduct);
  return (
    <section className="product-details">
      <Container>
        {selectedProduct ? (
          <React.Fragment>
            <SelectedProductDetail selectedProduct={selectedProduct} />
            <ProductDetailsTabs selectedProduct={selectedProduct} />
            <RelatedProducts />
          </React.Fragment>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <h3 className="text-center my-5">No Product Found</h3>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ShowProductDetail;
