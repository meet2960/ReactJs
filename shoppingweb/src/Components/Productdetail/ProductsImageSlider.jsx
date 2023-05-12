import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Skeleton } from "antd";
import "swiper/css";
import "swiper/css/pagination";

const ProductsImageSlider = ({ selectedProduct }) => {
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(2);
  const changeImageIndex = (index) => {
    setSelectedImage(index);
  };
  return (
    <React.Fragment>
      <Row>
        <Col lg={3}>
          {selectedProduct.images.map((items, index) => (
            <div
              className="avatar-md position-relative cursor-pointer mx-auto mb-3"
              onClick={() => changeImageIndex(index)}
            >
              <img src={items} alt="slider-img" className="img-stretch" />
            </div>
          ))}
        </Col>
        <Col lg={9}>
          <div className="">
            {loading && <Skeleton.Image active={true} className="skeleton" />}
            <img
              src={selectedProduct.images[selectedImage]}
              alt={selectedProduct.title}
              className={`img-fluid hov ${loading ? "d-none" : "d-block"}`}
              // onLoad={() => setLoading(false)}
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductsImageSlider;