import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { backImgArray } from "../../utils/backImgCollection";
import "swiper/css";
import "swiper/css/pagination";

const BackSlider = () => {
  return (
    <React.Fragment>
      <div className="mb-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          className="backSwiper"
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
        >
          {backImgArray &&
            backImgArray.length !== 0 &&
            backImgArray.map((items, index) => (
              <SwiperSlide key={index}>
                <div className="slider-img">
                  <img
                    src={items}
                    alt="background-images"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default BackSlider;
