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
      {/*   <section>
        <div className="banner-bg my-3">
          <Container>
            <Row className="gy-3 gy-md-0">
              <Col md={6}>
                <div className="banner-bg-1 p-4 text-end rounded-2">
                  <h5>New Arrivals</h5>
                  <h3 className="py-3 border-bottom">Sports Outfit</h3>
                  <div>
                    From <span>$150</span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="banner-bg-2 p-4 text-white rounded-2">
                  <h5 className="text-white">SmartWatches</h5>
                  <h3 className="py-3 border-bottom text-white">
                    Sale up to 20% Off
                  </h3>
                  <div>
                    Starting From <span>$200</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section> */}
      <section>
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
      </section>
    </React.Fragment>
  );
};

export default CustomerReview;
