import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../Redux/product/action";
import BackSlider from "../../Components/Home/BackSlider";
import OurServices from "../../Components/Footer/OurServices";
import NewsLetter from "../../Components/Footer/NewsLetter";
import TrendingProducts from "../../Components/Home/TrendingProducts";
import FooterDetails from "../../Components/Footer/FooterDetails";
import DealsProducts from "../../Components/DealsProducts";
import CustomerReview from "../../Components/Home/CustomerReview";

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
      <div className="home">
        <Container fluid={true} className="px-0">
          <BackSlider />
        </Container>
        <OurServices />
        <TrendingProducts productData={productData} />
        <NewsLetter />
        <DealsProducts />
        <CustomerReview />
        <FooterDetails />
      </div>
    </React.Fragment>
  );
};

export default Home;
