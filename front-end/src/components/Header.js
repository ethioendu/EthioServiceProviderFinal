import React from "react";
import { NavLink } from "react-router-dom";

const backgroundImage = '/my2.jpg';

const styles = {
  headerArea: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '7vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#f8f9fa",
    padding: "0 20px", 
  },
  mainNav: {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    width: "100%", 
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#333",
  },
  nav: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    textDecoration: "none",
    color: "#555",
    fontWeight: "100",
  },
  active: {
    color: "#007bff", 
  },
};

const LandingPage = () => {

  return (
    <div>
      <header style={styles.headerArea}>
  <nav style={styles.mainNav}>
    <div style={styles.logo}>Ethio Service Provider</div>
    <ul style={styles.nav}>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...styles.navItem,
            ...(isActive ? styles.active : {}),
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listing"
          style={({ isActive }) => ({
            ...styles.navItem,
            ...(isActive ? styles.active : {}),
          })}
        >
          Listing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ServiceForm"
          style={({ isActive }) => ({
            ...styles.navItem,
            ...(isActive ? styles.active : {}),
          })}
        >
          ServiceForm
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            ...styles.navItem,
            ...(isActive ? styles.active : {}),
          })}
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  </nav>
</header>

    </div>
  );
};

export default LandingPage;
