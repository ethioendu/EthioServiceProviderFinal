import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Listing from "./components/Listing";
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import MainBanner from './components/MainBanner';
import ServiceForm from './components/ServiceForm';
import Header from './components/Header'

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  <>
  <Header />
  <MainBanner />
  <ContactPage />
<Footer />
<ServiceForm />
 </>
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ServiceForm" element={<ServiceForm />} />
        <Route path="/listing" element={<Listing services={services} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
