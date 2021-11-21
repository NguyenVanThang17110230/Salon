import User from "layouts/User";
import React from "react";
import { Link } from "react-router-dom";

const Staff = () => {
  return (
    <User>
      <div className="p-5">
        <h3 className="text-center fw-bolder fs-1 mb-5">Staff</h3>
        <div className="row">
          <div className="col-4 mb-4">
            <Link to="/detail-staff">
              <img
                className="w-100"
                src={require("assets/img/staff.png").default}
                alt=""
              />
            </Link>
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
          <div className="col-4 mb-4">
            <img
              className="w-100"
              src={require("assets/img/staff1.png").default}
              alt=""
            />
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
          <div className="col-4 mb-4">
            <img
              className="w-100"
              src={require("assets/img/staff2.png").default}
              alt=""
            />
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
          <div className="col-4 mb-4">
            <img
              className="w-100"
              src={require("assets/img/staff3.png").default}
              alt=""
            />
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
          <div className="col-4 mb-4">
            <img
              className="w-100"
              src={require("assets/img/staff4.png").default}
              alt=""
            />
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
          <div className="col-4 mb-4">
            <img
              className="w-100"
              src={require("assets/img/staff5.png").default}
              alt=""
            />
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
          <div className="col-4">
            <img
              className="w-100"
              src={require("assets/img/staff6.png").default}
              alt=""
            />
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
          <div className="col-4">
            <img
              className="w-100"
              src={require("assets/img/staff7.png").default}
              alt=""
            />
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
          <div className="col-4">
            <img
              className="w-100"
              src={require("assets/img/staff8.png").default}
              alt=""
            />
            <h3 className="mt-3">Bin Lee</h3>
            <p className="text-secondary fs-5">10-02-1996</p>
            <p className="text-secondary fs-5">
              Most people recognize the CFDA Awards for its slew of perfect
              gowns and skin -tight.
            </p>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div
            className="mt-5 d-inline px-4 py-2 rounded-pill bg-dark text-uppercase text-white"
            style={{ cursor: "pointer" }}
          >
            view all work
          </div>
        </div>
      </div>
    </User>
  );
};

export default Staff;
