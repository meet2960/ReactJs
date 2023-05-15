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
        <Col md={2} className="order-2 order-md-1">
          <Row className="gx-0 justify-content-between mt-3 mt-lg-0">
            {selectedProduct.images.map((items, index) => (
              <Col xs={"auto"} md={12}>
                <div
                  key={index}
                  className="avatar-sm position-relative cursor-pointer mx-auto mb-3"
                  onClick={() => changeImageIndex(index)}
                >
                  <img src={items} alt="slider-img" className="img-stretch" />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={10} className="order-1 order-md-2">
          <div className="d-flex justify-content-center align-items-center h-100">
            {loading && <Skeleton.Image active={true} className="skeleton" />}
            <img
              src={
                selectedProduct?.images[selectedImage]
                  ? selectedProduct?.images[selectedImage]
                  : selectedProduct.thumbnail
              }
              alt={selectedProduct.title}
              className={`img-fluid hov ${loading ? "d-none" : "d-block"}`}
              onLoad={() => setLoading(false)}
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductsImageSlider;
