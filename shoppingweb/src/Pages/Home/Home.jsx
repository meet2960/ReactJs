import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../Redux/product/action";
import {
  BackSlider,
  OurServices,
  NewsLetter,
  TrendingProducts,
  DealsProducts,
  CustomerReview,
  OfferImage,
  FooterDetails,
} from "../../Components/Home";
import Loader from "../../Components/Common/Loader";

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
        {actionLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
