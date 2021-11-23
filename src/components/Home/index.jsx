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
        <div
          className="position-absolute top-50 w-25"
          style={{ left: "50px", transform: "translateY(-50%)" }}
        >
          <div className="fs-1 fw-bolder mb-2">We Care About Your Hair</div>
          <p className="mb-4">
            “Discover your own style. Don't try to repeat what has already been
            written - have the courage to do your own thing and don't be afraid
            to do something different.”
          </p>
          <div className="text-uppercase py-3 px-4 border-dark border d-inline rounded-pill">
            About us
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row pb-5 border-bottom">
          <div className="col-4">
            <div
              className="position-relative fw-bold d-flex align-items-center h-100"
              style={{ color: "#EDFBF9", fontSize: "6rem" }}
            >
              ABOUT US
              <div
                className="position-absolute text-dark top-50"
                style={{ transform: "translateY(-50%)" }}
              >
                <h1 className="fs-1" style={{ fontWeight: "600" }}>Hair Salon</h1>
                <h3 className="mt-3">The House of Hair Salen </h3>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img
              className="w-100"
              src={require("assets/img/home1.png").default}
              alt=""
            />
          </div>
          <div className="col-4 d-flex align-items-center flex-column">
            <h2>Beautiful Hair Comes From A Legendary.</h2>
            <p className="my-5 fs-4">
              “Working in a salon, you look at color all the time, what new
              products are coming out. You’re a part of the fashion industry,
              especial if you’re working in a higher-end salon”
            </p>
            <div className="rounded-pill px-4 py-2 text-uppercase d-inline fs-4" style={{backgroundColor:'#6A5E5E',fontWeight:'600'}}>Read more</div>
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-center">Our Services</h1>
          <h3 className="text-center">The House of Hair Salon</h3>
          <div className="row mt-5">
            <div className="col-3">
              <div className="d-flex align-items-center justify-content-center flex-column py-5" style={{backgroundColor:'#DCE2B3'}}>
                <img src={require("assets/img/home3.png").default} alt="" />
              <span className="mt-4">Coloring</span>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex align-items-center justify-content-center flex-column py-5" style={{backgroundColor:'#DCE2B3'}}>
                <img src={require("assets/img/home2.png").default} alt="" />
              <span className="mt-4">HairCut</span>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex align-items-center justify-content-center flex-column py-5" style={{backgroundColor:'#DCE2B3'}}>
                <img src={require("assets/img/home4.png").default} alt="" />
              <span className="mt-4">HairStyle</span>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex align-items-center justify-content-center flex-column py-5" style={{backgroundColor:'#DCE2B3'}}>
                <img src={require("assets/img/home3.png").default} alt="" />
              <span className="mt-4">Extra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100" style={{backgroundColor:'#F7F9F9'}}>
      <div className="container">
        <h1 className="text-center pt-4">Our Work</h1>
        <h4 className="mt-3 text-secondary text-center">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
        <div className="d-flex align-items-center justify-content-center fw-bolder mt-5 mb-4">
          <div className="me-5" style={{color:'#CADB66'}}>All</div>
          <div className="me-5">Del</div>
          <div className="me-5">Shave</div>
          <div className="me-5">HairStyle</div>
        </div>
        <div className="row">
          <div className="col-3">
          <div className="h-100 d-flex flex-column justify-content-between align-items-center">
            <img className="w-100" src={require("assets/img/home5.png").default} alt="" style={{height:'48%'}} />
            <img className="w-100" src={require("assets/img/home6.png").default} alt="" style={{height:'48%'}} />
          </div>
          
          </div>
          <div className="col-6">
            <img className="w-100" src={require("assets/img/home7.png").default} alt="" />
          </div>
          <div className="col-3">
          <img className="w-100 h-100" src={require("assets/img/home8.png").default} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-inline px-4 py-2 rounded-pill my-5 text-white" style={{backgroundColor:'#363636'}}>VIEW ALL WORK</div>
        </div>
      </div>
      </div>
    </User>
  );
};

export default Home;
