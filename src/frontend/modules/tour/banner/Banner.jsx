
import React from 'react';
import tour from '../../../../assets/images/tour.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <Container fluid className="p-0 position-relative">
      <Row className="g-0">
        <Col>
          <img src={tour} alt="tourImg" className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} />
        </Col>
      </Row>
      <Row className="position-absolute top-50 start-50 translate-middle w-100 text-center">
        <Col>
          <p className="text-white fs-3 fw-medium mb-0">All Tours</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;