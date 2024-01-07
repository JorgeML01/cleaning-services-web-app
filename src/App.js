import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import MainFooter from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
