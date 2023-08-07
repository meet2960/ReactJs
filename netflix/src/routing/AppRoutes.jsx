import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Layout from "../pages/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
