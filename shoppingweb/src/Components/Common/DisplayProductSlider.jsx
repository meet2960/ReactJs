import React from "react";
import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import CommonProductCard from "./CommonProductCard";

const DisplayProductSlider = () => {
  const { productData, actionLoading } = useSelector((state) => ({
    productData: state.product.products,
    actionLoading: state.common.actionsLoading,
  }));
  return (
    <React.Fragment>
      <div className="product-slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          className="product-swiper pb-5"
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1140: {
              slidesPerView: 4,
            },
          }}
          navigation={true}
        >
          {productData &&
            productData.lenght !== 0 &&
            productData.slice(8, 16).map((items, index) => (
              <React.Fragment key={index}>
                <SwiperSlide key={index}>
                  <Col>
                    <NavLink to={`/productdetails/${items.id}`}>
                      <CommonProductCard items={items} />
                    </NavLink>
                  </Col>
                </SwiperSlide>
              </React.Fragment>
            ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default DisplayProductSlider;
