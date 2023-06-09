import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../Redux/product/action";
import BackSlider from "../../Components/Home/BackSlider";
import OurServices from "../../Components/Home/OurServices";
import NewsLetter from "../../Components/Home/NewsLetter";
import TrendingProducts from "../../Components/Home/TrendingProducts";
import DealsProducts from "../../Components/DealsProducts";
import CustomerReview from "../../Components/Home/CustomerReview";
import FooterDetails from "../../Components/Footer/FooterDetails";
import OfferImage from "../../Components/Home/OfferImage";

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
        <OfferImage />
        <DealsProducts />
        <NewsLetter />
        <CustomerReview />
        <FooterDetails />
      </div>
    </React.Fragment>
  );
};

export default Home;
