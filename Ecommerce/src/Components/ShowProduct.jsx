import React, { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "../../node_modules/swiper/swiper-bundle.css";
import Loader from "./Common/Loader";
import { currencyFormat } from "../utils/formatCurrency";
const ShowProduct = () => {
  document.title = "Ecommerce | Product Page";
  const productData = useContext(ProductContext);
  const dispatch = useDispatch();
  // * For Loader Condition
  const [loading, setLoading] = useState(true);
  // * To get selected product Id
  const { id } = useParams();
  if (!productData) {
    console.log("No Result Found");
    return <div className="text-center">No Products Found</div>;
  }
  // * Get Selected Product All Details
  const selectedProduct = productData.find(
    (items, index) => items.id === parseInt(id)
  );
  return (
    <div className="container h-100">
      {selectedProduct ? (
        <div className="row mt-4 bs1 p-5 rounded-3">
          <div className="col-lg-4 d-flex flex-column">
            <div className="backup">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={true}
                modules={[selectedProduct.images.length ? Navigation : null]}
                className="mySwiper"
              >
                {selectedProduct.images &&
                  selectedProduct.images.map((images, index) => {
                    return (
                      <SwiperSlide key={index} className="w-100 h-100">
                        {loading && <Loader />}
                        <div className="mainimg d-flex justify-content-center align-items-center">
                          <img
                            src={images}
                            className={`img-fluid ${
                              loading ? "d-none" : "d-block"
                            }`}
                            alt="swiper-img"
                            onLoad={() => setLoading(false)}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <button
              type="button"
              className="btn btn-secondary mt-3"
              onClick={() => dispatch(addToCart(selectedProduct))}
            >
              Add to Cart
            </button>
          </div>
          <div className="col-lg-8">
            <h3>{selectedProduct.title}</h3>
            <p className="fw-14 mb-0">
              <span className="p-1 rounded-3 text-white bg-success me-2 d-inline-block">
                {selectedProduct.rating}
                <i className="fa-solid fa-star"></i>
              </span>
              30,856 Ratings & 3,851 Reviews
            </p>
            <p className="text-success fw-16 fw-semibold mb-2">
              Extra 15000 Off
            </p>

            <h3 className="my-3">{currencyFormat(selectedProduct.price)}</h3>
            <div>
              <h6 className="text-decoration-underline">Avaliable Offers</h6>
              <ul className="list-unstyled">
                <li>
                  <i className="fa-solid fa-tag text-success me-2"></i>
                  <span className="fw-semibold">Bank Offer</span> 10% off on
                  ICICI Bank Credit Card Transactions, up to ₹750, on orders of
                  ₹5,000 and above
                </li>
                <li>
                  <i className="fa-solid fa-tag text-success me-2"></i>
                  <span className="fw-semibold">Bank Offer</span> 10% off on SBI
                  Bank Credit Card Transactions, up to ₹750, on orders of ₹5,000
                  and above
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-0">Description</h4>
              <span className="fw-14">{selectedProduct.category}</span>
              <p>{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex h-100 justify-content-center align-items-center">
          <h2 className="text-center">No Product Found...!!!</h2>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
