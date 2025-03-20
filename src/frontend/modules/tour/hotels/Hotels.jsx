
import React, { useEffect, useState } from "react";
import hotels from "../../../../data/tourTrips";
import Pagination from "./Pagination";
import TravelCheck from "../../home/travelCheck/TravelCheck";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Hotels = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [filters, setFilters] = useState({ location: "", distance: "", maxPeople: "" });

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

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

  const filteredHotels = hotels.filter((hotel) => {
    const matchesLocation = hotel.city.toLowerCase().includes(filters.location.toLowerCase());
    return matchesLocation;
  });

  const currentPosts = filteredHotels.slice(firstPostIndex, lastPostIndex);

  return (
    <Container fluid className="p-4">
      <TravelCheck setFilters={setFilters} />
      <Row className="g-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((hotel, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={hotel.photo} alt="hotelphoto" className="img-fluid" />
                <Card.Body>
                  <Card.Title className="text-center">{hotel.city}</Card.Title>
                  <Card.Text className="text-center">{hotel.title}</Card.Text>
                  <Card.Text className="text-center">
                    <b>${hotel.price}</b>/per person
                  </Card.Text>
                  <Button variant="warning" className="w-100" onClick={() => handleBooking(index)}>
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <div className="d-flex flex-column align-items-center">
              <FaRegCheckCircle className="text-success mb-3" style={{ fontSize: "3rem" }} />
              <p className="fs-3 fst-italic">Sorry,</p>
              <p className="fs-3 fst-italic">No trips found...!</p>
            </div>
          </Col>
        )}
      </Row>
      <Pagination
        totalPosts={filteredHotels.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Hotels;