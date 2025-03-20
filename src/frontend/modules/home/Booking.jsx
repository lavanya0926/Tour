
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import trips from "../../../data/tourTrips";
import Footer from "../../components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tripIndex = Number(id);
  const trip = trips[tripIndex];

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    persons: 1,
  });

  const [isBooked, setIsBooked] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  const serviceCharge = 10;
  const totalPrice = trip ? trip.price * formData.persons + serviceCharge : 0;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${tripIndex}`)) || [];
    setReviews(storedReviews);
  }, [tripIndex]);

  if (!trip) {
    return <h2 className="text-center mt-5">Trip not found!</h2>;
  }

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
      : "No Ratings";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    setIsBooked(true);
  };

  const handleReviewChange = (e) => {
    setReviewInput(e.target.value);
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleReviewSubmit = () => {
    if (reviewInput.trim() === "" || selectedRating === 0) return;
    if (!user || !user.name) {
      alert("Please log in to leave a review.");
      return;
    }
    const newReview = {
      userName: user.name,
      date: new Date().toLocaleDateString(),
      rating: selectedRating,
      comment: reviewInput,
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${tripIndex}`, JSON.stringify(updatedReviews));
    setReviewInput("");
    setSelectedRating(0);
  };

  return (
    <div className="container py-5 mt-5">
      {isBooked ? (
        <div className="text-center mt-5">
          <h2 className="text-success">Thank you! Your tour is booked. 🎉</h2>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>Back to Home</button>
        </div>
      ) : (
        <>
          <div className="row mt-5">
            <div className="col-lg-7">
              <img src={trip.photo} alt={trip.title} className="img-fluid rounded" />
              <div className="card mt-3 p-3">
                <h1>{trip.title}</h1>
                <div className="d-flex flex-wrap gap-3">
                  <p><i className="bi bi-star-fill text-warning"></i> <b>{averageRating}</b></p>
                  <p><i className="bi bi-geo-alt-fill"></i> {trip.address}, {trip.city}</p>
                  <p><i className="bi bi-person-fill"></i> ${trip.price} per person</p>
                  <p><i className="bi bi-geo"></i> {trip.distance} km</p>
                  <p><i className="bi bi-people"></i> {trip.maxGroupSize} people</p>
                </div>
                <h3>Description</h3>
                <p>{trip.desc}</p>
              </div>
              <div className="card mt-4 p-3">
                <h3>Reviews ({reviews.length})</h3>
                <p className="fs-4">{averageRating !== "No Ratings" ? `⭐ ${averageRating}` : "No Ratings Yet"}</p>
                <div className="mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className={`bi bi-star${star <= selectedRating ? "-fill" : ""} text-warning`} style={{ cursor: "pointer" }} onClick={() => handleStarClick(star)}></i>
                  ))}
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Share your thoughts" value={reviewInput} onChange={handleReviewChange} />
                  <button className="btn btn-warning" onClick={handleReviewSubmit}>Submit</button>
                </div>
                {reviews.map((review, index) => (
                  <div key={index} className="border-bottom py-2">
                    <p><b>{review.userName}</b> <span>{review.date}</span> ⭐{review.rating}</p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 mt-5">
              <div className="card p-3">
                <h2>${trip.price} / Per person</h2>
                <h3>Information</h3>
                <input type="text" name="fullName" placeholder="Full Name" className="form-control mb-2" value={formData.fullName} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone Number" className="form-control mb-2" value={formData.phone} onChange={handleChange} />
                <input type="date" name="date" className="form-control mb-2" value={formData.date} onChange={handleChange} />
                <input type="number" name="persons" min="1" className="form-control mb-2" value={formData.persons} onChange={handleChange} />
                <h3>Total: ${totalPrice}</h3>
                <button className="btn btn-warning w-100 mt-2" onClick={handleBooking}>Book Now</button>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Booking;
