

import React from "react";
import { PiCloudSun } from "react-icons/pi";
import { FaRoute } from "react-icons/fa";
import { RiFolderSettingsLine } from "react-icons/ri";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";


const serviceData = [
  {
    title: "Calculate weather",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt facere ipsa magni, velit dolor incidunt quaerat? Magni neque molestiae fuga.",
    icon: <PiCloudSun />,
  },
  {
    title: "Best tour guide",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt facere ipsa magni, velit dolor incidunt quaerat? Magni neque molestiae fuga.",
    icon: <FaRoute />,
  },
  {
    title: "Customization",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt facere ipsa magni, velit dolor incidunt quaerat? Magni neque molestiae fuga.",
    icon: <RiFolderSettingsLine />,
  },
];

const BestService = () => {
  return (
   
    <Container fluid className="py-5 bg-light">
     
     
      <Row className="mb-4 text-center">
        <Col>
          <p className="text-danger fw-bold fs-5 fst-italic">What we serve</p>
          <h2 className="fw-bold">We offer our best services</h2>
        </Col>
      </Row>

     
      <Row className="g-4 justify-content-center">
        {serviceData.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
         
            <Card className="border-0 rounded-3 shadow-sm p-4 text-center h-100">
              <div
                className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "80px", height: "80px", fontSize: "35px" }}
              >
                {service.icon}
              </div>
              <Card.Body>
                <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestService;

