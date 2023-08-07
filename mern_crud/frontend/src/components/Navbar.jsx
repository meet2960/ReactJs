import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const btnRef = useRef(null);
  const menu = useRef(null);
  const toggleNavbar = () => {
    menu.current.classList.toggle("hidden");
  };

  return (
    <div>
      <nav className="bg-gray-100 shadow-lg p-5 md:p-0">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <NavLink className="flex items-center me-3">
                <span className="font-semibold text-lg">MERN_CRUD</span>
              </NavLink>

              <div className="hidden md:flex items-center space-x-1 nav-links">
                <NavLink
                  to={"/"}
                  className={"py-4 px-2  hover:text-green-500   font-semibold "}
                  aria-current="page"
                >
                  Home
                </NavLink>

                <NavLink
                  to={"/forms"}
                  className="py-4 px-2  hover:text-green-500 font-semibold transition duration-300"
                  aria-current="page"
                >
                  Forms
                </NavLink>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3 ">
              <button
                type="button"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                Log In
              </button>
              <button
                type="button"
                className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
              >
                Sign Up
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                ref={btnRef}
                className="outline-none mobile-menu-button"
                onClick={toggleNavbar}
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden mobile-menu" ref={menu}>
          <ul className="">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
