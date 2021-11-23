import React from "react";
import { NavLink } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <div className="p-3 min-vh-100" style={{ backgroundColor: "#4E73DF" }}>
      <div className="pb-3 border-bottom">
        <img
          className="w-100 h-80"
          src={require("assets/img/logo2.png").default}
          alt=""
        />
      </div>
      <div className="py-3 border-bottom">
        <NavLink
            to="/admin/dashboard"
          className="nav-link text-white ps-2 py-3 d-flex align-items-center fw-bolder"
          style={{ backgroundColor: "#5177e7",cursor:'pointer' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-dashboard me-1"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx={12} cy={13} r={2} />
            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
            <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
          </svg>
          Dashboard
        </NavLink>
      </div>
      <ul
        className="navbar-nav  my-3 mb-lg-0 text-white"
        style={{ fontSize: "18px" }}
      >
        <li className="nav-item mx-4 my-2">
          <NavLink
            className="nav-link text-white d-flex align-items-center justify-content-between"
            to="/admin/staff"
          >
            Staff
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </NavLink>
        </li>
        <li className="nav-item mx-4 my-2">
          <NavLink
            className="nav-link text-white d-flex align-items-center justify-content-between"
            to="/portfolio"
          >
            Service
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </NavLink>
        </li>
        <li className="nav-item mx-4 my-2">
          <NavLink
            className="nav-link text-white d-flex align-items-center justify-content-between"
            to="/portfolio"
          >
            Portpoliti
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </NavLink>
        </li>
        <li className="nav-item mx-4 my-2">
          <NavLink
            className="nav-link text-white d-flex align-items-center justify-content-between"
            to="/portfolio"
          >
            About us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </NavLink>
        </li>
        <li className="nav-item mx-4 my-2">
          <NavLink
            className="nav-link text-white d-flex align-items-center justify-content-between"
            to="/portfolio"
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBarAdmin;
