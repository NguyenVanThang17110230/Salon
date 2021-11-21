import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-primary min-vh-100 justify-content-center align-items-center d-flex">
      <div className="w-75 p-5 row">
        <div className="col-5 pe-0">
          <img
            className="w-100 h-100"
            src={require("assets/img/login.png").default}
            alt=""
          />
        </div>
        <div className="col-7 ps-0 bg-white">
          <div className="h-100 w-100 p-5">
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <div className="h-100 w-100">
                <div className="card-body text-center">
                  <h3 className="mb-5">Create an Account!</h3>
                  <div className="row">
                    <div className="col-6">
                      {" "}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="typeEmailX-2"
                          className="form-control form-control-lg rounded-pill fs-6"
                          placeholder="First Name"
                          style={{
                            paddingBottom: "0.7rem",
                            paddingTop: "0.7rem",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="typePasswordX-2"
                          className="form-control form-control-lg rounded-pill fs-6"
                          placeholder="Last Name"
                          style={{
                            paddingBottom: "0.7rem",
                            paddingTop: "0.7rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg rounded-pill fs-6"
                      placeholder="Email Address"
                      style={{
                        paddingBottom: "0.7rem",
                        paddingTop: "0.7rem",
                      }}
                    />
                  </div>

                  <div className="row">
                    <div className="col-6">
                      {" "}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="typeEmailX-2"
                          className="form-control form-control-lg rounded-pill fs-6"
                          placeholder="Password"
                          style={{
                            paddingBottom: "0.7rem",
                            paddingTop: "0.7rem",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="typePasswordX-2"
                          className="form-control form-control-lg rounded-pill fs-6"
                          placeholder="Reapeat Password"
                          style={{
                            paddingBottom: "0.7rem",
                            paddingTop: "0.7rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-lg w-100 rounded-pill fs-6"
                    type="submit"
                  >
                    Register Account
                  </button>
                  <hr className="my-4" />
                  <button
                    className="btn btn-lg text-white w-100 rounded-pill fs-6 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-google me-2"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                    </svg>{" "}
                    Login with google
                  </button>
                  <button
                    className="btn btn-lg mb-2 text-white w-100 rounded-pill mt-2 fs-6 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#3b5998" }}
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-facebook me-2"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                    Login with facebook
                  </button>
                  <hr className="my-4" />
                  <div className="d-flex flex-column">
                    <Link className="text-decoration-none mb-2" to="#">
                      Forgot Password?
                    </Link>
                    <Link className="text-decoration-none" to="/login">
                      Already have an account? Login!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
