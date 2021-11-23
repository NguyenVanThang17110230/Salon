import User from "layouts/User";
import React from "react";

const AboutUs = () => {
  return (
    <User>
      <div className="container">
        <h3 className="text-center fw-bolder fs-1 my-5">About Us</h3>
        <div className="row" style={{ fontFamily: `'Oregano', cursive` }}>
          <div className="col-6">
            <div
              className="position-relative fw-bold d-flex h-100 justify-content-center"
              style={{ color: "#EDFBF9", fontSize: "6rem" }}
            >
              HISTORY
              <div
                className="position-absolute text-dark top-50 start-50"
                style={{ transform: "translate(-50%,-50%)" }}
              >
                <h4
                  className="text-end fw-normal"
                  style={{ fontWeight: "600" }}
                >
                  New York - Since 2004
                </h4>
                <h1 className="text-end mt-3">About Our Story</h1>
              </div>
            </div>
          </div>
          <div className="col-6">
            <h3>
              At Hairone Salon, we are lorem ipsum dolor sit amet, consectetur
              adipi elit, sed do alusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              allamco laboris nisi ut aliquip ex ea commodo consequat.
            </h3>
            <h3 className="mt-5">Lara Coft</h3>
          </div>
        </div>
        <div className="mt-5">
          <iframe
            className="w-100"
            height="600px"
            src="https://youtube.com/embed/Lt-U_t2pUHI"
            frameborder="0"
            allowFullScreen
          />
        </div>
        <div className="w-100" style={{margin:'8rem 0'}}>
          <div className="row" style={{ fontFamily: `'Oregano', cursive` }}>
            <div className="col-3">
              <div className="position-relative text-center" style={{color:'#CAE2EF',fontSize:'4.5rem'}}>
                CASE
                <div className="position-absolute top-50 start-50 text-dark" style={{transform:'translate(-50%,-50%)',fontSize:'3rem'}}>457</div>
              </div>
              <div className="text-center fs-3">PROJECT COMPLETE</div>
            </div>
            <div className="col-3">
              <div className="position-relative text-center" style={{color:'#CAE2EF',fontSize:'4.5rem'}}>
                CLIENT
                <div className="position-absolute top-50 start-50 text-dark" style={{transform:'translate(-50%,-50%)',fontSize:'3rem'}}>343</div>
              </div>
              <div className="text-center fs-3">HAPPY CUSTOMERS</div>
            </div>
            <div className="col-3">
              <div className="position-relative text-center" style={{color:'#CAE2EF',fontSize:'4.5rem'}}>
              AWARD
                <div className="position-absolute top-50 start-50 text-dark" style={{transform:'translate(-50%,-50%)',fontSize:'3rem'}}>379</div>
              </div>
              <div className="text-center fs-3">AWARD WINNERS</div>
            </div>
            <div className="col-3">
              <div className="position-relative text-center" style={{color:'#CAE2EF',fontSize:'4.5rem'}}>
              STYLE
                <div className="position-absolute top-50 start-50 text-dark" style={{transform:'translate(-50%,-50%)',fontSize:'3rem'}}>97</div>
              </div>
              <div className="text-center fs-3">DIFFERENT HAIRSTYLES</div>
            </div>
          </div>
        </div>
      </div>
    </User>
  );
};

export default AboutUs;
