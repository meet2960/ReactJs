import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Skeleton } from "antd";
import "swiper/css";
import "swiper/css/pagination";

const ProductsImageSlider = ({ selectedProduct }) => {
  const [loading, setLoading] = useState({
    subImageLoading: true,
    mainImageLoading: true,
  });
  const [selectedImage, setSelectedImage] = useState(1);
  const changeImageIndex = (index) => {
    setSelectedImage(index);
  };
  return (
    <React.Fragment>
      <Row>
        <Col md={2} lg xl={2} className="order-2 order-md-1">
          <Row className="gx-0 justify-content-between mt-3 mt-md-0">
            {selectedProduct.images.slice(0, 4).map((items, index) => (
              <Col xs={"auto"} md={12} key={index} className="mb-0 mb-md-3">
                <div
                  key={index}
                  className="cursor-pointer avatar-small"
                  onClick={() => changeImageIndex(index)}
                >
                  {loading.subImageLoading && (
                    <Skeleton.Image
                      active={true}
                      className="sub-img-skeleton"
                    />
                  )}
                  <img
                    src={items}
                    alt="sub-img"
                    className={`${
                      loading.subImageLoading ? "d-none" : "d-block"
                    }`}
                    onLoad={() =>
                      setLoading((prevLoading) => ({
                        ...prevLoading,
                        subImageLoading: false,
                      }))
                    }
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={10} lg={9} xl={10} className="order-1 order-md-2">
          <div className="d-flex justify-content-lg-center product-details-img">
            {loading.mainImageLoading && (
              <Skeleton.Image active={true} className="main-img-skeleton" />
            )}
            <img
              src={
                selectedProduct?.images[selectedImage]
                  ? selectedProduct?.images[selectedImage]
                  : selectedProduct.thumbnail
              }
              alt={selectedProduct.title}
              className={`img-fluid object-cover rounded-1 ${
                loading.mainImageLoading ? "d-none" : "d-block"
              }`}
              onLoad={() =>
                setLoading((prevLoading) => ({
                  ...prevLoading,
                  mainImageLoading: false,
                }))
              }
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductsImageSlider;
