import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { reviewList } from "../../utils/reviewsList";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RatingsStars from "../Common/RatingsStars";

const CustomerReview = () => {
  return (
    <React.Fragment>
      <Container fluid className="reviews my-4">
        <Container className="position-relative">
          <div className="p-3  p-md-5">
            <div>
              <h3 className="mb-5 text-center">The Reviews are</h3>
            </div>
            <Row className="justify-content-center gx-0">
              <Col lg={8}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
                  className="reviewSwiper"
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                >
                  {reviewList &&
                    reviewList.length !== 0 &&
                    reviewList.map((items, index) => (
                      <SwiperSlide key={index}>
                        <React.Fragment>
                          <div className="d-flex justify-content-center">
                            <RatingsStars getRatings={items.rating} />
                          </div>
                          <h4 className="my-3">{items.title}</h4>
                          <div className="d-flex justify-content-center align-items-center my-4">
                            <div className="d-flex align-items-center review-user">
                              <div className="me-3 ">
                                <img
                                  src={items.image}
                                  alt="review-img"
                                  className="img-fluid rounded-circle avatar-sm"
                                />
                              </div>
                              <div className="text-center">
                                <h6 className="fw-semibold">{items.name}</h6>
                                <p className="mb-0 fs-12">{items.role}</p>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default CustomerReview;
