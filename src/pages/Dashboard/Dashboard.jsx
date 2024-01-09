import React from "react";
import DashboardVideo from "../../components/Dashboard/DashboardVideo";
import MainTitle from "../../components/Dashboard/Services";
import "./styles.css";
import { Container } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <DashboardVideo />
      <MainTitle />
    </>
  );
}

export default Dashboard;
