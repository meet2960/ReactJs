import React, { useMemo } from "react";
import { currencyFormat } from "../../utils/currencyFormat";
import { Col, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cart/cartSlice";
import { CustomToast } from "../../utils/customToast";

const ItemDetail = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const ratings = Math.round(selectedProduct.rating);
  const totalRating = 5;
  const productSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const productColors = [
    "Red",
    "Yello",
    "Blue",
    "Black",
    "White",
    "Green",
    "Purple",
  ];
  const dynamicDropDowns = useMemo(() => {
    return (
      <React.Fragment>
        <Col>
          <label htmlFor="size" className="form-label">
            Sizes
          </label>
          <select name="size" id="size" className="form-select">
            <option value={"default"}>Please Select</option>
            {productSizes &&
              productSizes.length !== 0 &&
              productSizes.map((items, index) => (
                <React.Fragment key={index}>
                  <option value={items}>{items}</option>
                </React.Fragment>
              ))}
          </select>
        </Col>
        <Col>
          <label htmlFor="size" className="form-label">
            Colors
          </label>
          <select name="size" id="size" className="form-select">
            <option value={"default"}>Please Select</option>
            {productColors &&
              productColors.length !== 0 &&
              productColors.map((items, index) => (
                <React.Fragment key={index}>
                  <option value={items}>{items}</option>
                </React.Fragment>
              ))}
          </select>
        </Col>
      </React.Fragment>
    );
  }, [productSizes, productColors]);
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(selectedProduct));
    CustomToast({
      title: "Product Added to Cart",
      icon: "success",
      timerProgressBar: true,
      timer: 1000,
      position: "top-right",
      showConfirmButton: false,
    });
  };
  return (
    <>
      <div className="item-details">
        <h3 className="fw-semibold mb-3">
          {selectedProduct.title.charAt(0).toUpperCase() +
            selectedProduct.title.slice(1)}
        </h3>
        <p className="mb-0 fs-12">
          <span>
            {[...Array(totalRating)].map((items, index) => (
              <React.Fragment key={index}>
                <i
                  className={`bi bi-star-fill me-1 ${
                    index < ratings ? "text-warning" : ""
                  }`}
                ></i>
              </React.Fragment>
            ))}
          </span>
          <span>30,856 Ratings & 3,851 Reviews</span>
        </p>
        <p className="text-success fs-12 fw-medium mb-2">Extra 15000 Off</p>
        <h3 className="my-3 fw-semibold">
          {currencyFormat(selectedProduct.price)}
        </h3>
        <div className="fs-16 py-3 item-desc">
          <p className="mb-0">{selectedProduct.description}</p>
        </div>
        <Row className="item-dropdownsjustify-content-between my-3">
          {dynamicDropDowns}
        </Row>
        <div className="">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={(e) => handleAddToCart(e)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;