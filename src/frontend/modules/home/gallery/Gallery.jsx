
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import galleryImg1 from "../../../../assets/images/gallery-01.jpg";
import galleryImg2 from "../../../../assets/images/gallery-02.jpg";
import galleryImg3 from "../../../../assets/images/gallery-03.jpg";
import galleryImg4 from "../../../../assets/images/gallery-04.jpg";
import galleryImg5 from "../../../../assets/images/gallery-05.jpg";
import galleryImg6 from "../../../../assets/images/gallery-06.jpg";
import galleryImg7 from "../../../../assets/images/gallery-07.jpg";
import galleryImg8 from "../../../../assets/images/gallery-08.jpg";

const images = [
  galleryImg1, galleryImg2, galleryImg3, galleryImg4,
  galleryImg5, galleryImg6, galleryImg7, galleryImg8
];

const Gallery = () => {
  return (
    <div className="container py-5">
     
      <div className="text-center mb-4">
        <p className="badge bg-warning text-dark fs-6 px-3 py-2" style={{ fontFamily: "cursive" }}>
          Gallery
        </p>
        <h2 className="fw-bold fs-1">Visit Our Customers' Tour Gallery</h2>
      </div>

     
      <div className="row g-3">
        {images.map((img, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="position-relative overflow-hidden rounded-3 shadow-sm">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="img-fluid w-100"
                style={{ height: "250px", objectFit: "cover", transition: "transform 0.3s ease" }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;



