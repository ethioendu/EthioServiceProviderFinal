import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const styles = {
  mainBanner: {
    backgroundColor: "#f8f9fa",
    padding: "60px 0",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  headerText: {
    marginBottom: "20px",
  },
  h2: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  hero: {
    marginBottom: "100px",
  },
  linkButton: {
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    margin: "0 10px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "50px",
    border: "5px solid #ccc",
    flex: "5",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};



const search = () => {
  const [services, setServices] = useState([]);
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

 

  
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
    fetchServices(searchValue); 
  };




  return (
    <div style={styles.mainBanner}>
      <div style={styles.container}>
        <div style={styles.headerText}>
          <h2 style={styles.h2}>Find Government & Organization Service</h2>
        </div>

        <div style={styles.hero}>
          <NavLink to="/category" style={styles.linkButton}>
            Explore Categories
          </NavLink>
          <NavLink to="/listing" style={styles.linkButton}>
            Add Your Listing
          </NavLink>
        </div>
        <div style={styles.body}>
          <h2>Our Services</h2>
          <p>
            We provide a platform to connect you with the best service providers
            in your area.
          </p>
        </div>
     
        <form style={styles.form}>

        <div style={styles.form}>
        <label>
          Search Services:
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search for services"
            style={styles.input}
          />      <button type="submit" style={styles.button}>
            Search Now
          </button>
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
</form>
      </div>
    </div>
  );
};

export default search;
