import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../Redux/product/action";
import BackSlider from "../Components/Home/BackSlider";
import OurServices from "../Components/Footer/OurServices";
import CustomerReview from "../Components/Home/CustomerReview";
import NewsLetter from "../Components/Footer/NewsLetter";

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
        <BackSlider />
      </Container>
      <Container className="mt-3 home">
        <OurServices />
        <NewsLetter />
      </Container>
      <CustomerReview />
      {/*   <ProductList productData={productData} actionLoading={actionLoading} /> */}
    </React.Fragment>
  );
};

export default Home;