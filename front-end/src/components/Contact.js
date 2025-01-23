import React from "react";
import Footer from './Footer';
import Header from './Header';

const Contact = () => {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      margin: "0",
    },
    content: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      background: "#fff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#444",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "1.5rem",
      color: "#555",
      marginTop: "20px",
    },
    paragraph: {
      fontSize: "1.2rem",
      lineHeight: "1.6",
    },
    contactInfo: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
    },
    contactItem: {
      backgroundColor: "#f1f1f1",
      padding: "10px 15px",
      borderRadius: "6px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    link: {
      textDecoration: "none",
      color: "#007BFF",
      fontWeight: "bold",
    },
    linkHover: {
      color: "#0056b3",
    },
  };

  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.content}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.paragraph}>Reach out to us through this page.</p>
        <h4 style={styles.subheading}>Our Address</h4>
        <p style={styles.paragraph}>Ethiopia, Addis Ababa</p>
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <a
              href="tel:+251911186021"
              style={styles.link}
              onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
              onMouseOut={(e) => (e.target.style.color = styles.link.color)}
            >
              +251-911-186021
            </a>
          </div>
          <div style={styles.contactItem}>
            <a
              href="tel:+251991108991"
              style={styles.link}
              onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
              onMouseOut={(e) => (e.target.style.color = styles.link.color)}
            >
              +251-991-108991
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
