import React from "react";
import ErrorImg from "../../assets/images/Errorimg.jpg";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  document.title = "Error | Ecommerce";
  const navigate = useNavigate();
  const navigateHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column h-100">
        <img src={ErrorImg} alt="Error" className="img-fluid" />
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-dark error-btn"
            onClick={(e) => navigateHome(e)}
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
