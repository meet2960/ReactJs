import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
const Category = () => {
  document.title = "Ecommerce | Category";
  const productData = useContext(ProductContext);
  const [category, setCategory] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    const uniqueCategory = [
      ...new Set(
        productData && productData.map((items, index) => items.category)
      ),
    ];
    setCategory(uniqueCategory);
  }, [productData, categoryProducts]);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  const handleCategory = (item) => {
    const allCategory = productData.filter((items, index) => {
      return item === items.category;
    });
    setCategoryProducts(allCategory);
  };
  return (
    <section className="h-100 overflow-hidden">
      <div className="container-fluid h-100 overflow-hidden">
        <div className="row h-100 justify-content-around">
          <div className="col-lg-2 h-100 overflow-y-auto">
            <h4 className="text-center my-3">Categories</h4>
            <div className="row">
              {category && category.length >= 1
                ? category.map((items, index) => {
                    return (
                      <div key={index} className="col-12">
                        <button
                          type="button"
                          className={`${
                            index === activeIndex ? "active" : ""
                          } btn btn-secondory-outline`}
                          onClick={() => {
                            handleCategory(items);
                            handleItemClick(index);
                          }}
                        >
                          {items.toUpperCase()}
                        </button>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="col-lg-9">
            <h4 className="text-center my-3">
              {categoryProducts.length >= 1
                ? categoryProducts[0].category.toUpperCase()
                : "Products"}
            </h4>
            <div className="row gy-3">
              {categoryProducts && categoryProducts.length >= 1 ? (
                categoryProducts.map((items, index) => {
                  return (
                    <div className="col-6 col-md-3 col-lg-4" key={index}>
                      <div className="mainimg d-flex justify-content-center flex-column align-items-center p-3  rounded-3">
                        <NavLink to={`/showproduct/${items.id}`}>
                          <img
                            src={items.thumbnail}
                            alt="category-img"
                            className="img-fluid"
                          />
                        </NavLink>
                        <h6 className="mt-2 mb-0">{items.title}</h6>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h4>No Products Found...!!!</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
