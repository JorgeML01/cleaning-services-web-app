import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceDesire: "",
    selectedDate: "",
    message: "",
  });

  const onInputChange = (field, event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Test button clicked");

    const url = "http://localhost:3001/enviar-correo";

    try {
      const response = await axios.post(url, {
        name: formData.name,
        email: formData.email,
        serviceDesire: formData.serviceDesire,
        phone: formData.phone,
        selectedDate: formData.selectedDate,
      });

      // Aquí puedes manejar la respuesta de la petición si es necesario
      console.log("Response:", response.data);
    } catch (error) {
      // Manejar errores de la petición
      console.error("Error sending request:", error);
    }
  };

  return (
    <Container className="main-container">
      <div className="contact-title">CONTACT US</div>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <Row>
          <Col md={6}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={formData.name}
                placeholder="Name"
                onChange={(e) => onInputChange("name", e)}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={formData.phone}
                placeholder="Phone"
                onChange={(e) => onInputChange("phone", e)}
              />
            </div>
          </Col>
        </Row>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => onInputChange("email", e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={formData.serviceDesire}
            placeholder="Service Desire"
            onChange={(e) => onInputChange("serviceDesire", e)}
          />
        </div>

        <div className="form-group date-form">
          <DatePicker
            selected={formData.selectedDate}
            onChange={handleDateChange}
            className="form-control"
            placeholderText="Date"
          />
        </div>

        <div className="form-group text-center">
          <button onClick={handleSubmit} type="submit" className="btn btn-primary button-send">
            Send
          </button>
        </div>
      </form>
    </Container>
  );
}

export default ContactForm;
