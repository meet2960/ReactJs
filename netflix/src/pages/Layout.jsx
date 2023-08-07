import { Outlet } from "react-router-dom";
// import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

const Layout = () => {
  return (
    <div className="app min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
