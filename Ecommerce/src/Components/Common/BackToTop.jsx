import React from "react";

const BackToTop = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div>
        <button
          onClick={() => toTop()}
          className="btn btn-secondary backtopbtn"
          id="back-to-top"
        >
          <i className="bi bi-arrow-up-short fs-24"></i>
        </button>
      </div>
    </>
  );
};
export default BackToTop;
