import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import BackSlider from "../Components/Home/BackSlider";
import { getProductList } from "../Redux/product/action";

const Home = () => {
  document.title = "Home | Ecommerce";
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
      <Container fluid={true} className="px-0">
        <React.Fragment>
          <BackSlider />
        </React.Fragment>
        <Container className="mt-3 home">
          {/* <ProductList
            productData={productData}
            actionLoading={actionLoading}
          /> */}
          {/* <Tables /> */}
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Home;