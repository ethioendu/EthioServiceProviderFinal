import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceForm.css';
import Header from "./Header";
import Footer from "./Footer";


const ServiceForm = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    serviceType: '',
    openingTime: '',
    closingTime: '',
  });

  const [services, setServices] = useState([]);
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/add-ServiceForm', formData);
      setMessage(response.data.message);
      setFormData({
        serviceName: '',
        serviceType: '',
        openingTime: '',
        closingTime: '',
      });
      fetchServices(); 
    } catch (error) {
      setMessage('An error occurred while submitting the form');
      console.error('Error submitting form:', error);
    }
  };

  const fetchServices = async (search = '') => {
    try {
      const response = await axios.get(`http://localhost:5000/services?search=${search}`);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
    fetchServices(searchValue);
  };

  return (
    <div><Header />

      <h1>Service Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="serviceName">Service Name:</label>
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="serviceType">Service Type:</label>
          <input
            type="text"
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="openingTime">Opening Time:</label>
          <input
            type="time"
            id="openingTime"
            name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="closingTime">Closing Time:</label>
          <input
            type="time"
            id="closingTime"
            name="closingTime"
            value={formData.closingTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}

      <h2>Search Services</h2>
      <input
        type="text"
        placeholder="Search services"
        value={query}
        onChange={handleSearchChange}
      />

      <h2>Service List</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
      
<Footer />
    </div>
  );
};

export default ServiceForm;
