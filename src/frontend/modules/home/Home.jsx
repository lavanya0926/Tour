


import React, { useState } from "react";
import HeroSlide from "./hero/HeroSlide";
import TravelCheck from "./travelCheck/TravelCheck";
import TourList from "../tour/TourList";
import BestService from "./bestService/BestService";
import Container from "react-bootstrap/Container";

import Navbar from "../../components/header/Navbar";
import Experience from "./experience/Experience";
import Gallery from "./gallery/Gallery";
import Carousel from "./clientReviews/Carousel";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../../components/footer/Footer";
import Features from "./features/Features";

const Home = () => {
  const [filters, setFilters] = useState({ location: "", distance: "", maxPeople: "" });

  return (
    <div>
      {/* <Navbar /> */}
      <HeroSlide />
      <TravelCheck setFilters={setFilters} />
      {/* <TourList filters={filters} /> */}
      <BestService />
      <Features />
      <Experience />
      <Gallery />
      <Carousel />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
