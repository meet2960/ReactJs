import React from "react";
import { useSelector } from "react-redux";
import { currencyFormat } from "../../utils/currencyFormat";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Col, Row } from "reactstrap";

const RelatedProducts = () => {
  const product = useSelector((state) => state.product.products);

  return (
    <React.Fragment>
      <div className="related-products position-relative my-5 fs-16">
        <Row className="mb-5">
          <Col xs={12}>
            <div className="text-center">
              <div className="heading-title position-relative mb-3">
                <h3 className="mb-0">Related Products</h3>
              </div>
              <div>
                <p className="text-center">
                  Mirum est notare quam littera gothica quam nunc putamus parum
                  claram!
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            className="related-swiper"
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
            {product &&
              product.length !== 0 &&
              product.slice(0, 8).map((items, index) => (
                <SwiperSlide key={index}>
                  <Col>
                    <div className="related-product-img position-relative rounded-3 overflow-hidden">
                      <img
                        src={items.thumbnail}
                        alt="titles"
                        className="img-stretch"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="mb-0 fs-12">
                        {items.category.toUpperCase()}
                      </p>
                      <h5>{items.title}</h5>
                      <div>{currencyFormat(items.price)}</div>
                    </div>
                  </Col>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RelatedProducts;
