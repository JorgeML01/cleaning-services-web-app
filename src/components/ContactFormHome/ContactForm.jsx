import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";


function ContactForm() {

  const [isSubmitted, setIsSubmitted] = useState(false);

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

    const url = "https://cleaning-services-web-api.vercel.app/enviar-correo";

    try {
      const response = await axios.post(url, {
        name: formData.name,
        email: formData.email,
        serviceDesire: formData.serviceDesire,
        phone: formData.phone,
        selectedDate: formData.selectedDate,
      });

      // Actualizar el estado para mostrar el mensaje de éxito
      setIsSubmitted(true);

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
          <select
            id="serviceDesire"
            className="form-control drop-down-menu-service-desire"
            value={formData.serviceDesire}
            onChange={(e) => onInputChange("serviceDesire", e)}
          >
            <option value="" disabled hidden>Service Desire</option>
            <option value="Carpet Cleaning">Carpet Cleaning</option>
            <option value="Office Cleaning">Office Cleaning</option>
            <option value="Home Residencial Cleaning">Home Residencial Cleaning</option>
            <option value="Moving In/Out Cleaning">Moving In/Out Cleaning</option>
            <option value="Rental Cleaning">Rental Cleaning</option>
            <option value="Post Construction Cleaning">Post Construction Cleaning</option>
          </select>
        </div>



        <div className="form-group date-form">
          <DatePicker
            selected={formData.selectedDate}
            onChange={handleDateChange}
            className="form-control"
            placeholderText="Date"
          />
        </div>
        
        {isSubmitted && (
          <div className="form-group success-message">
            Message sent successfully!
          </div>
        )}

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
