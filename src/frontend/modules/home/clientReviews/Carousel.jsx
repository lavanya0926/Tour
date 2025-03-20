




import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar1 from "../../../../assets/images/ava-1.jpg";
import avatar2 from "../../../../assets/images/ava-2.jpg";
import avatar3 from "../../../../assets/images/ava-3.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      name: "John Doe",
      role: "Customer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar1,
    },
    {
      name: "Cathrine Jo",
      role: "Customer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar2,
    },
    {
      name: "Peter Alice",
      role: "Customer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum doloribus cum, nemo voluptatibus esse.",
      image: avatar3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-5 text-center">
     
      <div className="mb-4">
        <h5 className="d-inline-block bg-warning text-white px-4 py-2 rounded-pill">
          Clients Love
        </h5>
        <h2 className="mt-3 fw-bold">What our clients say about us</h2>
      </div>

      
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === currentSlide ? "active" : ""}`}>
              <div className="d-flex flex-column align-items-center">
               
                <img
                  src={slide.image}
                  className="rounded-circle mb-3 img-fluid custom-img"
                  alt={slide.name}
                />
                <p className="text-muted w-75">{slide.description}</p>
                <h5 className="fw-bold mb-0">{slide.name}</h5>
                <p className="text-primary">{slide.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

     
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      
      <style>
        {`
          @media (max-width: 425px) {
            .custom-img {
              width: 180px !important;
              height: 180px !important;
              margin-left: 20px; /* Add space on the left */
              display: block;
            }
          }

          @media (min-width: 426px) and (max-width: 768px) {
            .custom-img {
              width: 140px !important;
              height: 140px !important;
            }
          }

          @media (min-width: 769px) {
            .custom-img {
              width: 120px !important;
              height: 120px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
