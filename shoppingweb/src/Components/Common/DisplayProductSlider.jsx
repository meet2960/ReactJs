import React, { useContext } from "react";
import { useSelector } from "react-redux";
import RatingsStars from "./RatingsStars";
import { Col } from "reactstrap";
import { CurrenctContext } from "../../Context/CurrencyContext";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const DisplayProductSlider = () => {
  const { productData, actionLoading } = useSelector((state) => ({
    productData: state.product.products,
    actionLoading: state.common.actionsLoading,
  }));
  const { formatCurrency } = useContext(CurrenctContext);
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
                      <div className="fs-16 product-slider-content overflow-hidden text-center position-relative">
                        <div className="product-slider-image d-flex justify-content-center">
                          <img src={items.thumbnail} alt={items.title} />
                        </div>
                        <div className="px-4 py-3">
                          <div className="fs-12">
                            {items.category.toUpperCase()}
                          </div>
                          <h5 className="mb-0 text-truncate">
                            {items.title.toUpperCase()}
                          </h5>
                          <p className="mb-0">
                            <RatingsStars
                              getRatings={items.rating}
                              size={"fs-12"}
                            />
                          </p>
                          <div className="fw-semibold my-2">
                            <span>{formatCurrency(items.price)}</span>
                          </div>
                        </div>
                        <div className="position-absolute sale">
                          <span className="badge bg-dark">Sale</span>
                        </div>
                      </div>
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