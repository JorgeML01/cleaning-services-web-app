import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

function NavigationBar() {
  return (
    // sticky-top
    <Navbar collapseOnSelect expand="lg" className="all-navbar sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./logo-tidy-time-cleaning.png"
            width="220"
            height="100"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about-us">About Us</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="contact-us" id="button-quote" eventKey={2}>
              Get a Quote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
