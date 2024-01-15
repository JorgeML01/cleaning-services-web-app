import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import ServicesTab from "./pages/ServicesTab";
import ContactUs from "./pages/ContactUs";
import MainFooter from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<ServicesTab />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
