import User from "layouts/User";
import React from "react";

const Service = () => {
  return (
    <User>
      <div className="container">
        <h3 className="text-center fw-bolder fs-1 my-5">Services</h3>
        <div className="row">
          <div className="col-6 pe-0 border-start border-top border-2">
            <div className="p-5 d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-center fs-2 mb-5">Hair Care</h4>
              <div className="row text-secondary fs-4">
                <div className="col-7 mb-4">Shampoo & Blow Dry:</div>
                <div className="col-5 text-center">100.000đ</div>
                <div className="col-7 mb-4">Personalized Color:</div>
                <div className="col-5 text-center">200.000đ</div>
                <div className="col-7 mb-4">Formal Styling:</div>
                <div className="col-5 text-center">150.000đ</div>
                <div className="col-7 mb-4">Bridal & Wedding:</div>
                <div className="col-5 text-center">80.000đ</div>
              </div>
            </div>
          </div>
          <div className="col-6 px-0" style={{ height: "500px" }}>
            <img
              className="w-100 h-100"
              src={require("assets/img/service1.png").default}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 pe-0 px-0" style={{ height: "500px" }}>
            <img
              className="w-100 h-100"
              src={require("assets/img/service2.png").default}
              alt=""
            />
          </div>
          <div className="col-6 ps-0 border-end border-2">
            <div className="p-5 d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-center fs-2 mb-5">Hair Care</h4>
              <div className="row text-secondary fs-4">
                <div className="col-7 mb-4">Shampoo & Blow Dry:</div>
                <div className="col-5 text-center">100.000đ</div>
                <div className="col-7 mb-4">Personalized Color:</div>
                <div className="col-5 text-center">200.000đ</div>
                <div className="col-7 mb-4">Formal Styling:</div>
                <div className="col-5 text-center">150.000đ</div>
                <div className="col-7 mb-4">Bridal & Wedding:</div>
                <div className="col-5 text-center">80.000đ</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 pe-0 border-start border-bottom border-2">
            <div className="p-5 d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-center fs-2 mb-5">Hair Care</h4>
              <div className="row text-secondary fs-4">
                <div className="col-7 mb-4">Shampoo & Blow Dry:</div>
                <div className="col-5 text-center">100.000đ</div>
                <div className="col-7 mb-4">Personalized Color:</div>
                <div className="col-5 text-center">200.000đ</div>
                <div className="col-7 mb-4">Formal Styling:</div>
                <div className="col-5 text-center">150.000đ</div>
                <div className="col-7 mb-4">Bridal & Wedding:</div>
                <div className="col-5 text-center">80.000đ</div>
              </div>
            </div>
          </div>
          <div className="col-6 px-0" style={{ height: "500px" }}>
            <img
              className="w-100 h-100"
              src={require("assets/img/service3.png").default}
              alt=""
            />
          </div>
        </div>
      </div>
    </User>
  );
};

export default Service;
