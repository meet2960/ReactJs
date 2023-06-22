import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Second = () => {
  const divRefs = useRef([]);
  useEffect(() => {
    const getAddress = sessionStorage.getItem("selectedAddress");
    console.log("SelectedAddress : ", getAddress);
  }, []);

  const handleOnClick = (e, refIndex) => {
    console.log(divRefs.current[refIndex].innerText);
    const addressText = divRefs.current[refIndex].innerText;
    sessionStorage.setItem("selectedAddress", addressText);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="positon-relative">
          <div className="container">
            <div className="container">
              <div className="row  justify-content-md-center">
                <div className="col-md-12 col-lg-10 col-xl-7 col-sm-12">
                  <NavLink
                    // to="/third"
                    className="text-dark text-decoration-none"
                  >
                    <div
                      className="primary-bg p-3 rounded"
                      ref={(ref) => (divRefs.current[0] = ref)}
                      onClick={(e) => handleOnClick(e, 0)}
                    >
                      <div className="row align-items-center">
                        <div className="col-6 col-md-4 d-flex flex-md-column justify-content-center align-items-center border-last order-1">
                          <p className="ms-1 m-0 p-0  mt-md-2 fw-loc-head">
                            Los Angeles{" "}
                          </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 order-3 order-md-2">
                          <p className="f-loc p-0 m-0 mt-4 mt-md-0 p-md-3 ">
                            Robertson Office Smile Health Orthodontics, Dr.
                            Deborah Solomon Children Dentistry
                          </p>
                        </div>
                        <div className="col-6 col-md-12  order-2 order-md-3">
                          <p className="loc-des m-0 text-center p-0 mt-2 mt-lg-4">
                            1462 S Robertson Blvd, Los Angeles, CA 90035, USA
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="row mt-4 justify-content-md-center">
                <div className="col-md-12 col-lg-10 col-xl-7 col-sm-12">
                  <NavLink
                    to="/home"
                    className="text-dark text-decoration-none"
                  >
                    <div
                      className="primary-bg p-3 rounded"
                      ref={(ref) => (divRefs.current[1] = ref)}
                      onClick={(e) => handleOnClick(e, 1)}
                    >
                      <div className="row align-items-center sess">
                        <div className="col-6 col-md-4 d-flex flex-md-column justify-content-center align-items-center border-last order-1">
                          {/*  <img
                            src={Location}
                            className="loc-img"
                            alt="location"
                          /> */}
                          <p className="ms-1 m-0 p-0  mt-md-2 mb-lg-2 fw-loc-head">
                            Los Angeles
                          </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 order-3 order-md-2">
                          <p className="f-loc p-0 m-0 mt-4 mt-md-0 p-md-3 ">
                            Beverly Hills Office, Smile Health Orthodontics, Dr
                            Deborah Solomon
                          </p>
                        </div>
                        <div className="col-6 col-md-12  order-2 order-md-3">
                          <p className="loc-des m-0 text-center p-0 mt-2 mb-lg-2 mt-lg-4">
                            1462 S Robertson Blvd, Los Angeles, CA 90035, USA
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <section id="footer" className="mt-5">
            <hr className="opacity-100" />
            <div className="container-fluid  ps-0">
              <div className="row align-items-center justify-content-between">
                <div className="col-2 back-btn px-2 py-1 d-flex align-items-center rounded-2">
                  <div className="position-absolute desktop-left primary-bg rounded  py-1">
                    <NavLink to="/" className="text-decoration-none text-dark">
                      <span className=" ms-1 me-2 fw-bold">Back</span>
                    </NavLink>
                  </div>
                </div>
                <div className="col-12 col-md-7 f-text  pt-2 fw-bold text-center  align-items-center d-flex justify-content-center">
                  <p className="text-center">
                    Copyright © 2022 Shosmile Orthodontics. All rights reserved.
                  </p>
                </div>
                <div className="col-md-2 col-lg-1 col-12 m-0 p-0 d-flex justify-content-center mb-0 align-items-center justify-content-md-end gap-3 gap-md-3 mt-2 mt-md-0">
                  <a href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook fa  text-dark"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram text-dark fa "></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fa-brands fa-twitter text-dark fa "></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin text-dark fa "></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Second;
