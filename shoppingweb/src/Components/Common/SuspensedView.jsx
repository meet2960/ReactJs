import React from "react";
import { Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

const SuspensedView = ({ children }) => {
  TopBarProgress.config({
    barColors: {
      0: "#088675",
      1: "#E97015",
    },
    barThickness: 5,
    shadowBlur: 15,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export default SuspensedView;
