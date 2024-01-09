import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function ServiceCards() {
  // Array of service data
  const services = [
    {
      image: "./service1.webp",
      text: "Carpet Cleaning",
    },
    {
      image: "./service2.webp",
      text: "Office Cleaning",
    },
    {
      image: "./service3.webp",
      text: "Window Cleaning",
    },
    {
      image: "./service4.webp",
      text: "House Cleaning",
    },
    {
      image: "./service5.webp",
      text: "Short-term Rental Cleaning",
    },
    {
      image: "./service6.webp",
      text: "Corporate Lease Cleaning",
    },
  ];

  return (
    <Container>
      <Row>
        {services.map((service, index) => (
          <Col className="col-card" key={index} xs={12} md={6} lg={4}>
            <Card className="card-sevice">
              <Card.Img
                className="card-image"
                variant="top"
                src={service.image}
              />
              <Card.Body>
                <Card.Text className="col-card">{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServiceCards;
