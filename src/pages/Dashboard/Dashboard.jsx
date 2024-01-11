import React from "react";
import DashboardVideo from "../../components/Dashboard/DashboardVideo";
import MainTitle from "../../components/Dashboard/Services/MainTitle/MainTitle.jsx";
import ServiceCards from "../../components/Dashboard/Services/ServiceCards/ServiceCards.jsx";
import ContactForm from "../../components/ContactFormHome";
import "./styles.css";

function Dashboard() {
  return (
    <>
      <DashboardVideo />
      <MainTitle />
      <ServiceCards />
      <ContactForm />
    </>
  );
}

export default Dashboard;
