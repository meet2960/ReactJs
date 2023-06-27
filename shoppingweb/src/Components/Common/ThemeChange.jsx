import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLayoutMode } from "../../Redux/layouts/layout";
const ThemeChange = () => {
  const dispatch = useDispatch();
  // * To get currenct layout theme of Page
  const { layoutType } = useSelector((state) => ({
    layoutType: state.layout.layoutModeType,
  }));

  // * Change current Theme
  const handleThemeChange = (e) => {
    e.preventDefault();
    if (layoutType === "light") {
      dispatch(changeLayoutMode("dark"));
    } else {
      dispatch(changeLayoutMode("light"));
    }
  };

  // * To Get the current layout mode, then set it mode based on user click
  useEffect(() => {
    if (layoutType) {
      document.body.setAttribute("data-layout-mode", layoutType);
    }
  }, [layoutType]);
  return (
    <React.Fragment>
      <button
        type="button"
        className="light-dark-mode nav-link"
        onClick={(e) => handleThemeChange(e)}
      >
        <i className="bi bi-moon" />
      </button>
    </React.Fragment>
  );
};

export default ThemeChange;
