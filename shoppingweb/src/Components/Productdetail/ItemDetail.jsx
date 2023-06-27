import React, { useContext, useEffect, useMemo, useState } from "react";
import { CurrenctContext } from "../../Context/CurrencyContext";
import { Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cart/cartSlice";
import { CustomToast } from "../../utils/customToast";
import RatingsStars from "../Common/RatingsStars";
import CustomReactSelect from "../Common/CustomReactSelect";
import { addToWishList } from "../../Redux/wishlist/wishlistSlice";

const ItemDetail = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishlist.wishListItems);
  const { formatCurrency } = useContext(CurrenctContext);
  const sizesOption = useMemo(
    () => [
      { value: "XS", label: "XS" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "XXL", label: "XXL" },
      { value: "XXXL", label: "XXXL" },
    ],
    []
  );
  const colorOptions = useMemo(
    () => [
      { value: "red", label: "Red" },
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue" },
      { value: "black", label: "Black" },
      { value: "white", label: "White" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
    []
  );
  const [optionObj, setOptionObj] = useState({
    selectedSize: "",
    selectedColor: "",
  });
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(selectedProduct));
    CustomToast({
      title: "Product Added to Cart",
      icon: "success",
    });
  };

  const handleSelectedValue = (selectedValue, options) => {
    console.log("Details Select", selectedValue);
    if (options.name === "size") {
      setOptionObj({ ...optionObj, selectedSize: selectedValue });
    } else if (options.name === "color") {
      setOptionObj({ ...optionObj, selectedColor: selectedValue });
    } else {
      return;
    }
  };
  useEffect(() => {
    console.log("Inside Details with Options", optionObj);
  }, [optionObj]);
  const handleAddToWishlist = (e) => {
    e.preventDefault();
    dispatch(addToWishList(selectedProduct));
    const productExistInWishList = wishListItems.findIndex((items, index) => {
      return items.id === selectedProduct.id;
    });
    if (productExistInWishList < 0) {
      console.log("Please add in wishlist");
      CustomToast({
        title: "Product Added to Wishlist",
        icon: "success",
      });
    } else {
      console.log("Already Added in Page");
      CustomToast({
        title: "Product Already Added in Wishlist",
        icon: "error",
      });
    }
  };
  return (
    <React.Fragment>
      <div className="item-details">
        <p className="fs-12 mb-0">{selectedProduct.category.toUpperCase()}</p>
        <h3 className="fw-semibold my-3">
          {selectedProduct.title.charAt(0).toUpperCase() +
            selectedProduct.title.slice(1)}
        </h3>
        <p className="mb-0 fs-12">
          <RatingsStars getRatings={selectedProduct.rating} />
          <span className="ms-2">30,856 Ratings & 3,851 Reviews</span>
        </p>
        <p className="text-success fs-12 fw-medium mb-2">Extra 15000 Off</p>
        <h3 className="my-3 fw-semibold">
          {formatCurrency(selectedProduct.price)}
        </h3>
        <div className="fs-16 py-3 border-bottom">
          <p className="mb-0">{selectedProduct.description}</p>
        </div>
        <Row className="item-dropdowns justify-content-between my-3 fs-16">
          <Col xs={6}>
            <label htmlFor="Sizes" className="form-label">
              Sizes
            </label>
            <CustomReactSelect
              options={sizesOption}
              getSelectedValue={handleSelectedValue}
              selectName={"size"}
            />
          </Col>
          <Col xs={6}>
            <label htmlFor="Sizes" className="form-label">
              Colors
            </label>
            <CustomReactSelect
              options={colorOptions}
              getSelectedValue={handleSelectedValue}
              selectName={"color"}
            />
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <div>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={(e) => handleAddToCart(e)}
            >
              ADD TO CART
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={(e) => handleAddToWishlist(e)}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemDetail;
