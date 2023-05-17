import React from "react";

const BackToTopButton = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
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
    <React.Fragment>
      <button
        className={"btn btn-primary rounded-circle"}
        id="back-to-top"
        onClick={() => toTop()}
      >
        <i className="bi bi-arrow-up-short fs-24"></i>
      </button>
    </React.Fragment>
  );
};

export default BackToTopButton;
