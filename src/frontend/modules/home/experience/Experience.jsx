
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import experiencephoto from "../../../../assets/images/experience.png";

const Experience = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row align-items-center">
       
        <div className="col-md-6 order-md-1 text-center text-md-start px-4">
          <p className="badge bg-warning text-dark fs-5 px-3 py-2">Experience</p>
          <h2 className="fw-bold fs-1">
            With our all experience <br /> we will serve you
          </h2>
          <p className="text-muted fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sit sint atque veniamylies dolorum veniam aliquid.
          </p>

          
          <div className="row text-center text-md-start mt-4">
            <div className="col-12 col-sm-4 mb-3 mb-sm-0">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div
                  className="rounded bg-warning text-white px-4 py-3 text-center"
                  style={{
                    borderRadius: "8px",
                    minWidth: "80px",
                  }}
                >
                  <h3 className="fw-bold mb-0">12k+</h3>
                </div>
                <p className="mb-0 ps-md-3 mt-2 mt-md-0 text-muted">
                  Successful <br /> Trips
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-3 mb-sm-0">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div
                  className="rounded bg-primary text-white px-4 py-3 text-center"
                  style={{
                    borderRadius: "8px",
                    minWidth: "80px",
                  }}
                >
                  <h3 className="fw-bold mb-0">2k+</h3>
                </div>
                <p className="mb-0 ps-md-3 mt-2 mt-md-0 text-muted">
                  Regular <br /> Clients
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div
                  className="rounded bg-danger text-white px-4 py-3 text-center"
                  style={{
                    borderRadius: "8px",
                    minWidth: "80px",
                  }}
                >
                  <h3 className="fw-bold mb-0">15</h3>
                </div>
                <p className="mb-0 ps-md-3 mt-2 mt-md-0 text-muted">
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="col-md-6 order-md-2 text-center mt-4 mt-md-0">
          <img
            className="img-fluid rounded shadow-lg"
            src={experiencephoto}
            alt="Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
