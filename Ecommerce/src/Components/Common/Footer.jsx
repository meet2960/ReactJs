import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid mt-5 p-5 bt">
      <div className="row">
        <div className="col-lg-3">
          <h5 className="mb-3">About</h5>
          <ul className="list-unstyled">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>WholeSales</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h5 className="mb-3">Connect with Us</h5>
          <ul className="list-unstyled">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h5 className="mb-3">Make Money with Us</h5>
          <ul className="list-unstyled">
            <li>Sell with Us</li>
            <li>Become an Affiliate</li>
            <li>Advertise your Product</li>
            <li>Merchants</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h5 className="mb-3">Lets us Help You</h5>
          <ul className="list-unstyled">
            <li>Your Account</li>
            <li>Return Center</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
