


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo3 from "../../../assets/images/logo3.png";
import { BsPersonGear } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
      
          <div className="col-md-3 mb-4 mb-md-0">
            <img src={logo3} alt="Booking Engine Logo" className="img-fluid mb-2" style={{ width: "150px" }} />
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, natus!</p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start fs-5">
              <BsPersonGear />
              <GrGithub />
              <BiLogoLinkedin />
              <FaInstagram />
            </div>
          </div>

        
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold">Discover</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-muted text-decoration-none">About</a></li>
              <li><a href="/tour" className="text-muted text-decoration-none">Tour</a></li>
            </ul>
          </div>

          
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/gallery" className="text-muted text-decoration-none">Gallery</a></li>
              <li><a href="/login" className="text-muted text-decoration-none">Login</a></li>
              <li><a href="/register" className="text-muted text-decoration-none">Register</a></li>
            </ul>
          </div>

          
          <div className="col-md-3">
            <h5 className="fw-bold">Contact</h5>
            <p className="text-muted mb-1"><strong>Address:</strong> Kphb, Hyderabad</p>
            <p className="text-muted mb-1 text-break"><strong>Email:</strong> <a href="mailto:ramireddylavanya2609@gmail.com" className="text-muted text-decoration-none">ramireddylavanya2609@gmail.com</a></p>
            <p className="text-muted"><strong>Phone:</strong> +91 8121741676</p>
          </div>
        </div>
        <div className="text-center pt-3 border-top mt-3">
          <p className="text-muted mb-0">Copyright 2024, Lavanya and developed by Ramireddy Lavanya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
