
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import trips from "../../../../data/tourTrips";
import "bootstrap/dist/css/bootstrap.min.css";

const Features = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name) {
      setUser(storedUser);
    }
  }, []);

  const handleBooking = (index) => {
    if (user) {
      navigate(`/book/${index}`);
    } else {
      localStorage.setItem("redirectAfterLogin", `/book/${index}`);
      navigate(`/register`);
    }
  };

  return (
    <div className="container py-5">
      
      <div className="text-center">
        <p className="badge bg-warning text-dark fs-5 px-3 py-2">Explore</p>
        <h2 className="fw-bold fs-1">Our Featured Tours</h2>
      </div>

      
      <div className="row mt-4">
        {trips.map((trip, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-lg border-0 rounded-3">
              <img
                src={trip.photo}
                alt="tripphoto"
                className="card-img-top rounded-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{trip.city}</h5>
                <p className="text-muted">{trip.title}</p>
                <p className="fw-bold">
                  ${trip.price} <span className="text-muted">/ per person</span>
                </p>
                <button
                  className="btn btn-warning fw-bold px-4 py-2"
                  onClick={() => handleBooking(index)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

