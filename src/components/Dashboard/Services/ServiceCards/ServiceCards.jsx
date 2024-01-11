import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function ServiceCards() {
  const services = [
    {
      image: "./carpet-cleaning.jpeg",
      text: "Carpet Cleaning",
    },
    {
      image: "./office-cleaning.jpeg",
      text: "Office Cleaning",
    },
    {
      image: "./home-residencial-cleaning.jpeg",
      text: "Home Residencial Cleaning",
    },
    {
      image: "./moving-in-out-cleaning.jpeg",
      text: "Moving In/Out Cleaning",
    },
    {
      image: "./rental-cleaning-(commercial-cleaning).jpeg",
      text: "Rental Cleaning (commercial cleaning)",
    },
    {
      image: "./post-construction-cleaning.jpeg",
      text: "Post Construction Cleaning",
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
