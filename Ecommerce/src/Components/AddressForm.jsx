import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import citiesData from "../utils/cities.json";
import successLogo from "../assets/images/tick-mark.png";
import { cartTotal } from "../utils/cartTotal";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddressForm = ({ setShow }) => {
  const cart = useSelector((state) => state.cart);
  const [addressInfo, setAddressInfo] = useState({});
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  // ! For States and Cities
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const total = cartTotal(cart);
  useEffect(() => {
    setAddressInfo({
      ...addressInfo,
      cartDetails: cart,
      cartTotal: total,
    });
    const uniqueStates = [...new Set(citiesData.map((city) => city.state))];
    setStates(uniqueStates);
    console.log("Address Data : ", addressInfo);
  }, []);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setAddressInfo({ ...addressInfo, [event.target.name]: event.target.value });
    setSelectedCity("");
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setAddressInfo({ ...addressInfo, [event.target.name]: event.target.value });
  };
  const filteredCities = citiesData.filter(
    (items) => items.state === selectedState
  );
  // console.log("All Cities", filteredCities);
  // ! For Address Form Input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setAddressInfo({ ...addressInfo, [name]: newValue });
  };
  // ! Submit the form and place order
  const handlePlaceOrder = () => {
    orderSuccessAlert();
    if (
      addressInfo.name &&
      addressInfo.mobilenum &&
      addressInfo.locality &&
      addressInfo.address &&
      addressInfo.city &&
      addressInfo.state &&
      addressInfo.checked
    ) {
      console.log("All Address Data : ", addressInfo);
      orderSuccessAlert();
      // setConfirm(true);
    } else {
      alert("Please fill the form");
      console.log("All Address Data : ", addressInfo);
    }
  };
  const orderSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully",
      confirmButtonText: "Home",
      // text: "Something went wrong!",
    }).then(() => {
      sessionStorage.setItem("order-details", JSON.stringify(addressInfo));
      navigate("/");
    });
  };
  return (
    <div className="rounded-3 bs p-5">
      <form action="" name="shipping-address">
        <div className="row g-4">
          <h4 className="mb-0" onCopy={() => alert("Copied Successfully")}>
            Add Shipping Address
          </h4>
          <div className="col-lg-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={addressInfo.name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="floatingInput">Full Name</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Mobile Number"
                value={addressInfo.mobilenum}
                name="mobilenum"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="floatingInput">Mobile Number</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Pincode"
                pattern="[1-9][0-9]{5}"
                name="pincode"
                value={addressInfo.pincode}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="floatingInput">Pincode</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Locality"
                name="locality"
                value={addressInfo.locality}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="floatingInput">Locality</label>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Address"
                name="address"
                value={addressInfo.address}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="floatingInput">Address</label>
            </div>
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="state">
              State:
            </label>
            <select
              name="state"
              id="state"
              className="form-select"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="">Select State</option>
              {states.map((items, index) => (
                <option key={index} value={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-6">
            <label className="form-label" htmlFor="city">
              City:
            </label>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              name="city"
              id="city"
              className="form-select"
            >
              <option value="">Select City</option>
              {filteredCities.map((items, index) => (
                <option key={index} value={items.name}>
                  {items.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-12">
            <input
              className="form-check-input me-2"
              type="checkbox"
              name="checked"
              id="terms"
              checked={addressInfo.checked}
              onChange={handleChange}
              //   checked={render}
            />
            <label htmlFor="terms" className="mb-0">
              Agree Terms and Condition
            </label>
          </div>
          <div className="col-lg-12 d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              Go Back
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={(e) => handlePlaceOrder(e)}
            >
              Save And Deliver Here
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
