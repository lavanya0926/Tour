
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../../assets/images/logo1.png";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log("Navbar received user:", user);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // ✅ Ensure user state updates on logout
    navigate("/");
    setExpanded(false);
  };

  return (
    <>
      <Navbar expand="md" bg="light" className="shadow-sm fixed-top py-2" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="ms-3">
            <img src={logo1} alt="logo" height="50" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarNav"
            onClick={() => setExpanded(!expanded)}
          />

          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto d-flex align-items-center flex-wrap">
              <Nav.Link as={Link} to="/" className="mx-3 fw-bold text-dark" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/tour" className="mx-3 fw-bold text-dark" onClick={() => setExpanded(false)}>
                Tour
              </Nav.Link>

              {/* ✅ Show username & logout when user is logged in */}
              {user ? (
                <>
                  <span className="mx-2 fw-bold text-dark">{user.name}</span>
                  <Button
                    onClick={handleLogout}
                    className="fw-bold text-white btn btn-danger rounded-pill px-3"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    as={Link}
                    to="/login"
                    className="mx-2 fw-bold text-white btn btn-primary rounded-pill px-3"
                    onClick={() => setExpanded(false)}
                  >
                    Login
                  </Button>
                  <Button
                    as={Link}
                    to="/register"
                    className="fw-bold text-dark btn btn-warning rounded-pill px-3"
                    onClick={() => setExpanded(false)}
                  >
                    Register
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="pt-5"></div>
    </>
  );
};

export default CustomNavbar;
