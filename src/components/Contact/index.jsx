import User from "layouts/User";
import React from "react";

const Contact = () => {
  return (
    <User>
      <div className="container my-5">
        <img
          className="w-100"
          src={require("assets/img/contact.png").default}
          alt=""
        />
        <div className="card mt-5 p-4" style={{ backgroundColor: "#E9E4E8" }}>
          <h1 className="text-center"> Leave Message</h1>
          <h4 className="fw-normal text-center">
            Our staff will call back later and answer you questions
          </h4>
          <form>
            <div className="mt-5">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your name"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
              </div>
            </div>
            <textarea
              className="form-control mt-5"
              rows={4}
              defaultValue={""}
              placeholder="Start the discusion..."
            />
            <div className="mt-4 d-flex justify-content-center">
              <button
                type="submit"
                className="btn rounded-pill px-4"
                style={{ backgroundColor: "#D9E82B" }}
              >
                POST
              </button>
            </div>
          </form>
        </div>
      </div>
    </User>
  );
};

export default Contact;
