import React from "react";
import DashboardVideo from "../../components/Dashboard/DashboardVideo";
import MainTitle from "../../components/Dashboard/Services/MainTitle/MainTitle.jsx";
import ServiceCards from "../../components/Dashboard/Services/ServiceCards/ServiceCards.jsx";
import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <DashboardVideo />
      <MainTitle />
      <ServiceCards />
    </>
  );
}

export default Dashboard;
