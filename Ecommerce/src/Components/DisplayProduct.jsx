import React, { useState, useContext, useMemo, useEffect } from "react";
import BackToTop from "./Common/BackToTop";
import { ProductContext } from "../context/ProductContext";
import Loader from "./Common/Loader";
import { Skeleton } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "../../node_modules/swiper/swiper-bundle.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { currencyFormat } from "../utils/formatCurrency";
const DisplayProduct = () => {
  document.title = "Home";
  const productData = useContext(ProductContext);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    console.log("Cart Items", cart);
  }, [cart]);
  // ! Logic for Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = useMemo(() => {
    if (!productData) return 0;
    return Math.ceil(productData.length / itemsPerPage);
  }, [productData, itemsPerPage]);
  const selectPageHandle = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <section>
      {!productData ? (
        <div className="my-5">
          <Loader />
        </div>
      ) : (
        <>
          {/* // ? Swiper Images  */}
          <div className="container-fluid d-none d-md-block  px-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="back-bg-1 h-400"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="back-bg-2 h-400"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="back-bg-3 h-400"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="back-bg-4 h-400"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="back-bg-5 h-400"></div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="container mtm bs p-4 rounded-3 bg-light">
            {/* // ? Display Product Here  */}
            <div className="row justify-content-between gx-4">
              {productData &&
                productData.length !== 0 &&
                productData
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="col-lg-3 col-md-4 d-flex flex-column text-center mb-5"
                      >
                        <div className="card h-100">
                          {loading ? (
                            <Skeleton.Image
                              active={true}
                              className="w-100 h-250"
                            />
                          ) : null}
                          <div className="mainimg d-flex justify-content-center align-items-center">
                            <NavLink
                              to={`/showproduct/${items.id}`}
                              className="text-decoration-none text-dark"
                            >
                              <img
                                src={items.thumbnail}
                                alt="product-img"
                                className={`img-fluid hov ${
                                  loading ? "d-none" : "d-block"
                                }`}
                                onLoad={() => setLoading(false)}
                              />
                            </NavLink>
                          </div>
                          <div className="card-body px-0">
                            <h6 className="mb-0">{items.title.slice(0, 20)}</h6>
                          </div>
                          <div className="mt-auto">
                            <h5 className="card-text mb-3">
                              {currencyFormat(items.price)}
                            </h5>
                          </div>
                          <div className="card-footer mt-auto">
                            <button
                              className="btn btn-secondary rounded-3 fw-14 mt-auto"
                              type="button"
                              onClick={() => {
                                dispatch(addToCart(items));
                              }}
                            >
                              <i className="fa-solid fa-cart-shopping"></i> ADD
                              TO CART
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
            {/* // ? Pagination Here  */}
            {productData.length > 0 && (
              <div className="row justify-content-between mt-3 align-items-center">
                <div className="col-lg-auto">
                  <button
                    className="btn btn-secondary"
                    onClick={() => selectPageHandle(page - 1)}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                </div>
                <div className="col-lg-9">
                  <div className="pagination flex-wrap justify-content-center">
                    {[...Array(totalPages)].fill(0).map((items, index) => {
                      return (
                        <div
                          key={index}
                          id={`page${index + 1}`}
                          className={`page-item page-link mx-2${
                            page === index + 1 ? ` active` : ""
                          }`}
                          onClick={() => selectPageHandle(index + 1)}
                        >
                          {index + 1}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-lg-auto">
                  <button
                    className="btn btn-secondary"
                    onClick={() => selectPageHandle(page + 1)}
                    disabled={page === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <BackToTop />
    </section>
  );
};

export default DisplayProduct;
