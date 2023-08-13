import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../store/product/action";
import {
  BackSlider,
  CustomerReview,
  DealsProducts,
  FooterDetails,
  NewsLetter,
  OfferImage,
  OurServices,
  TrendingProducts,
} from "../../components/Home";
import Loader from "../../components/Common/Loader";

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
    <div className="home">
      {actionLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {/* <AllButtons /> */}
          <BackSlider />
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
  );
};

export default Home;
