import ServiceCards from "../../components/Dashboard/Services/ServiceCards/ServiceCards.jsx";
import MainTitle from "../../components/Dashboard/Services/MainTitle/MainTitle.jsx";
import "./styles.css";

function ServiceTab() {
  return (
    <div className="container-service-tab">
      <MainTitle />
      <ServiceCards />
    </div>
  );
}

export default ServiceTab;
