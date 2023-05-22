import React from "react";
/* import { backImgArray } from "../../utils/backImgCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination"; */
import { Col, Container, Row } from "reactstrap";

const BackSlider = () => {
  return (
    <React.Fragment>
      <div className="bg-banner">
        <Container>
          <Row>
            <Col lg={6}>
              <p>Amazing Products From Store</p>
              <h1 className="text-white">
                Explore Our Awesome Collection of Perfect Products for your
                Livings
              </h1>
              <button type="button" className="btn btn-primary mt-3">
                Shop Now
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  <section>
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
      </section> */}
    </React.Fragment>
  );
};

export default BackSlider;