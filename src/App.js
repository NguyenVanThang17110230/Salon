import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import "./styles/custom.css";
import history from "./history"
import Home from "./components/Home";
import Service from "components/services";
import Staff from "components/Staff";
import DetailStaff from "components/DetailStaff";
import AboutUs from "components/AboutUs";
import Contact from "components/Contact";
import Portfolio from "components/Portfolio";
import Login from "components/Login";
import Signup from "components/Signup";
import Dashboard from "components/Admin/Dashboard";
import AdminStaff from "components/Admin/Staff";

const App = () => {
  return (
    <Router history={history}>
      <div className="w-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/detail-staff/*" element={<DetailStaff />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/staff" element={<AdminStaff />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
