import User from "layouts/User";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const Portfolio = () => {
  const [filter, setFilter] = useState("");
  const [booking, setBooking] = useState(false);
  const [confirm, setConfirm] = useState(false);
  console.log("hhh", booking);

  console.log("value", filter);
  const toggle = () => {
    setBooking(!booking);
  };
  const toggleConfirm = () => {
    setConfirm(!confirm);
  };
  const confirmBooking = () => {
    setConfirm(true);
    setBooking(false);
  };
  const bookingModal = () => {
    return (
      <Modal isOpen={booking} toggle={toggle}>
        <ModalBody>
          <h1 className="text-center">Welcome to Our Salon</h1>
          <div className="d-flex justify-content-center">
            <img
              width="80px"
              src={require("assets/img/po3.png").default}
              alt=""
            />
          </div>
          <h3 className="text-center mt-3">
            Please, type Telephone Number to continue booking
          </h3>

          <input
            type="text"
            className="form-control py-3 mt-3"
            placeholder="Ex: 0903832xxx"
            style={{ backgroundColor: "#B7B9E0" }}
          />

          <div
            className="py-3 rounded-3 text-center fs-4 my-4"
            style={{ backgroundColor: "#BDEA0C", fontWeight: "600",cursor:'pointer' }}
            onClick={() => confirmBooking()}
          >
            Continue
          </div>

          <div
            className="text-decoration-underline text-center fw-bolder fs-3"
            onClick={toggle}
            style={{ cursor: "pointer" }}
          >
            Back to Home page
          </div>
        </ModalBody>
      </Modal>
    );
  };

  const confirmBookingModal = () => {
    return (
      <Modal isOpen={confirm} toggle={toggleConfirm}>
        <ModalHeader
          className="p-y text-center d-flex justify-content-center"
          style={{ backgroundColor: "#ECEFF1" }}
        >
          MAKE A RESERVATION
        </ModalHeader>
        <ModalBody>
          <div>1.Choose Salon</div>
          <div className="position-relative">
            <input
              type="text"
              className="form-control ps-5 py-3 mt-3"
              placeholder="927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh"
              style={{ backgroundColor: "#E7F2F0" }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home position-absolute top-50"
              width={38}
              height={38}
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ left: "5px", transform: "translateY(-50%)" }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </div>
          <div className="mt-4">2.Choose Service</div>
          <div className="position-relative">
            <input
              type="text"
              className="form-control ps-5 py-3 mt-3"
              placeholder="Xem tất cả dịch vụ hấp dẫn"
              style={{ backgroundColor: "#E7F2F0" }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-cut position-absolute top-50"
              width={38}
              height={38}
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ left: "5px", transform: "translateY(-50%)" }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx={7} cy={17} r={3} />
              <circle cx={17} cy={17} r={3} />
              <line x1="9.15" y1="14.85" x2={18} y2={4} />
              <line x1={6} y1={4} x2="14.85" y2="14.85" />
            </svg>
          </div>
          <div className="mt-4">3.Choose Date,Time</div>
          <div className="position-relative">
            <input
              type="date"
              className="form-control ps-5 py-3 mt-3"
              style={{ backgroundColor: "#E7F2F0" }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-calendar position-absolute top-50"
              width={38}
              height={38}
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ left: "5px", transform: "translateY(-50%)" }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x={4} y={5} width={16} height={16} rx={2} />
              <line x1={16} y1={3} x2={16} y2={7} />
              <line x1={8} y1={3} x2={8} y2={7} />
              <line x1={4} y1={11} x2={20} y2={11} />
              <line x1={11} y1={15} x2={12} y2={15} />
              <line x1={12} y1={15} x2={12} y2={18} />
            </svg>
          </div>

          <div
            className="py-3 rounded-3 text-center fs-4 my-4"
            style={{
              backgroundColor: "#BDEA0C",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={() => setConfirm(!confirm)}
          >
            DONE
          </div>
        </ModalBody>
      </Modal>
    );
  };
  return (
    <User>
      <div className="w-100 mt-3">
        <img
          className="w-100"
          src={require("assets/img/po-banner.png").default}
          alt=""
        />
      </div>
      <div className="container mt-4">
        <div class="row">
          <div className="col-4">
            <div
              className="text-white py-3 px-5 text-center rounded-3"
              style={{ backgroundColor: "#363636" }}
            >
              FIND A SALON NEAR YOU
            </div>
            <div className="mt-5">
              <div className="card p-3">
                {filter !== "" ? (
                  <div className="w-100">
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                              cursor: "pointer",
                            }}
                            onClick={() => setBooking(true)}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-3">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 h-100"
                          src={require("assets/img/po-logo.png").default}
                          alt=""
                        />
                        927 Hậu Giang, Phường 11, Quận 6, TP Hồ Chí Minh
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              HOTLINE
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card" style={{ fontWeight: "600" }}>
                            <div className="d-flex align-items-center justify-content-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-phone-call me-2"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#000000"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                              </svg>
                              DIRECTION
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              fontWeight: "600",
                              backgroundColor: "#B9D21A",
                            }}
                          >
                            BOOKING
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-arrow-narrow-right"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="#000000"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1={5} y1={12} x2={19} y2={12} />
                              <line x1={15} y1={16} x2={19} y2={12} />
                              <line x1={15} y1={8} x2={19} y2={12} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-100">
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      TP Ho Chi Minh (40)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Ha Noi (4)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Binh Duong (2)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Dong Nai (10)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Tien Giang (14)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Thanh Hoa (8)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Thai Nguyen (7)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Quang Ninh (5)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Nghe An (2)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Vung Tau (1)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      Can Tho (3)
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <img
                        className="me-3"
                        src={require("assets/img/po-logo.png").default}
                        alt=""
                      />
                      An Giang (4)
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <select
                  className="form-select py-3 border-dark"
                  aria-label=".form-select-lg example"
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="" selected>
                    Province/City
                  </option>
                  <option value={1}>Ho Chi Minh City</option>
                  <option value={2}>Ho Noi</option>
                  <option value={3}>Thanh Hoa</option>
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-select py-3 border-dark"
                  aria-label=".form-select-lg example"
                >
                  <option selected>District</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>

              <div className="mt-5 col-12">
                <div className="row">
                  <div className="col-6">
                    <img
                      className="w-100"
                      src={require("assets/img/po-1.png").default}
                      alt=""
                    />
                    <p className="fw-bolder mt-2">
                      56 Nguyễn Huy Tưởng, P. TX Trung, Q. Thanh Xuân, Hà Nội
                    </p>
                    <div className="d-flex py-2 px-5 border border-1 border-dark text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-phone-call me-5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#000000"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                      HOTLINE:0123456789
                    </div>
                  </div>
                  <div className="col-6">
                    <img
                      className="w-100"
                      src={require("assets/img/po-1.png").default}
                      alt=""
                    />
                    <p className="fw-bolder mt-2">
                      56 Nguyễn Huy Tưởng, P. TX Trung, Q. Thanh Xuân, Hà Nội
                    </p>
                    <div className="d-flex py-2 px-5 border border-1 border-dark text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-phone-call me-5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#000000"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                      HOTLINE:0123456789
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {bookingModal()}
      {confirmBookingModal()}
    </User>
  );
};

export default Portfolio;
