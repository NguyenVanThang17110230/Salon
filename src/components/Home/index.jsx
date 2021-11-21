import React from "react";
import User from "../../layouts/User";

const Home = () => {
  return (
    <User>
      <section id="banner" className="position-relative">
        <img
          src={require("assets/img/banner.png").default}
          className="w-100"
          alt=""
        />
        <div className="position-absolute top-50 w-25" style={{left:'50px',transform:'translateY(-50%)'}}>
          <div className="fs-1 fw-bolder mb-2">We Care About Your Hair</div>
          <p className="mb-4">
            “Discover your own style. Don't try to repeat what has already been
            written - have the courage to do your own thing and don't be afraid
            to do something different.”
          </p>
          <div className="text-uppercase py-3 px-4 border-dark border d-inline rounded-pill">About us</div>
        </div>
      </section>
    </User>
  );
};

export default Home;
