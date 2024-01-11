import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import MainFooter from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
