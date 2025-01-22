import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  
import './Listing.css'; 
import Footer from './Footer';
import Header from './Header';

const Listing = () => {
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState('');
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async (search = '') => {
    try {
      const response = await axios.get(`http://localhost:5000/services?search=${search}`);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const addService = async (e) => {
    e.preventDefault();
  
    if (!serviceName) {
      setMessage('Service name is required.');
      return;
    }
  
    // Check if the name already exists in the local list (frontend validation)
    if (services.some(service => service.name.toLowerCase() === serviceName.toLowerCase())) {
      setMessage('Service name is already registered');
      return;
    }
  
    try {
      // Check with the backend
      const response = await axios.post('http://localhost:5000/add-service', { ServiceName: serviceName });
      setMessage(response.data.message);
  
      // Add to the local list if successfully added
      setServices([...services, { id: Date.now(), name: serviceName }]);
      setServiceName('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Failed to add service. Please try again.');
      }
    }
  };
  
  
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
    fetchServices(searchValue); 
  };

  return (
    <div className="listing-container">
     <Header />
     
      <h1>Service Management</h1>

      <form onSubmit={addService} className="add-service-form">
        <label>
          Add a New Service:
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="Enter service name"
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-button">Add Service</button>
      </form>
      {message && <p className="message">{message}</p>}

      <div className="search-bar">
        <label>
          Search Services:
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search for services"
            className="input-field"
          />
        </label>
      </div>

      <ul className="service-list">
        {services.map((service) => (
          <li key={service.id} className="service-item">
            <Link to="/contact" className="service-link">
              {service.name || 'Unnamed Service'}
            </Link>
          </li>
        ))}
      </ul>
      <>        
      <Footer />

       </>

    </div>
    
  );
};

export default Listing;
