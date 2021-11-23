import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="px-5 py-2 bg-dark text-white">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">Welcome to hair salon</div>
          <div className="d-flex">
            <div>Tue Nov 9 1:36AM |</div>
            <div className="ms-1 fw-normal">Call us: (+84) 123456789</div>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="d-flex justify-content-between align-items-center w-100">
            <NavLink className="navbar-brand" to="/">
              <img src={require("assets/img/logo.png").default} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <ul
              className="navbar-nav  mb-2 mb-lg-0"
              style={{ fontSize: "18px" }}
            >
              <li className="nav-item mx-5">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/portfolio">
                  UTE
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/service">
                  Services
                </NavLink>
              </li>

              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/staff">
                  Staff
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
            <div
              className="py-2 px-5 border rounded-pill border-dark text-dark d-flex align-items-center"
              type="submit"
            >
              Book now
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
