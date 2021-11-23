import Admin from "layouts/Admin";
import React from "react";

const Dashboard = () => {
  return (
    <Admin>
      <h5>Dashboard</h5>
      <div className="row mt-4">
        <div className="col-3">
          <div
            className="position-relative border p-3 d-flex align-items-center justify-content-between"
            style={{ borderRadius: "10px" }}
          >
            <div>
              <h6 className="fw-bolder">EARNING (MONTHLY)</h6>
              <div>$112,021</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-cash"
              width={38}
              height={38}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x={7} y={9} width={14} height={10} rx={2} />
              <circle cx={14} cy={14} r={2} />
              <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
            </svg>
            <div
              className="position-absolute top-50 start-0"
              style={{
                width: "3px",
                height: "80%",
                backgroundColor: "#5CE762",
                transform: "translateY(-50%)",
              }}
            ></div>
          </div>
        </div>
        <div className="col-3">
          <div
            className="position-relative border p-3 d-flex align-items-center justify-content-between"
            style={{ borderRadius: "10px" }}
          >
            <div>
              <h6 className="fw-bolder">EARNING (ANNUAL)</h6>
              <div>$112,021</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-coin"
              width={38}
              height={38}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx={12} cy={12} r={9} />
              <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
              <path d="M12 6v2m0 8v2" />
            </svg>
            <div
              className="position-absolute top-50 start-0"
              style={{
                width: "3px",
                height: "80%",
                backgroundColor: "#F13B13",
                transform: "translateY(-50%)",
              }}
            ></div>
          </div>
        </div>
        <div className="col-3">
          <div
            className="position-relative border p-3 d-flex align-items-center justify-content-between"
            style={{ borderRadius: "10px" }}
          >
            <div>
              <h6 className="fw-bolder">TASK</h6>
              <div className="d-flex align-items-center">
                50%
                <div
                  className="progress ms-3"
                  style={{ width: "120px", height: "0.8rem" }}
                >
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-report"
              width={38}
              height={38}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
              <path d="M18 14v4h4" />
              <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
              <rect x={8} y={3} width={6} height={4} rx={2} />
              <circle cx={18} cy={18} r={4} />
              <path d="M8 11h4" />
              <path d="M8 15h3" />
            </svg>
            <div
              className="position-absolute top-50 start-0"
              style={{
                width: "3px",
                height: "80%",
                backgroundColor: "#D3F30C",
                transform: "translateY(-50%)",
              }}
            ></div>
          </div>
        </div>
        <div className="col-3">
          <div
            className="position-relative border p-3 d-flex align-items-center justify-content-between"
            style={{ borderRadius: "10px" }}
          >
            <div>
              <h6 className="fw-bolder">PENDING REQUESTS</h6>
              <div>18</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-messages"
              width={38}
              height={38}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
            </svg>
            <div
              className="position-absolute top-50 start-0"
              style={{
                width: "3px",
                height: "80%",
                backgroundColor: "#9143B6",
                transform: "translateY(-50%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Dashboard;
