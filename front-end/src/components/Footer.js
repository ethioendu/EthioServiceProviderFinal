import React from "react";

const backgroundImage = '/footer.avif';

const styles = {
  footer: {
    backgroundColor: "#343a40",
    color: "#007bff",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "37vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    flexDirection: "column",
    textAlign: "center",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  column: {
    flex: "1 1 30%",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "20px",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  links: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  linkHover: {
    textDecoration: "underline",
  },
  contact: {
    marginTop: "10px",
  },
  footerBottom: {
    marginTop: "20px",
    fontSize: "14px",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>About</h4>
          <p>
            This Ethio-Service-Finder website is made by Ethio-Geez. <br />
            If you want to know more about us, use our contact to reach us.
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Helpful Links</h4>
          <ul style={styles.links}>
            <li>
              <a
                href="https://books.google.com.et/books/about/Addis_Ababa_Telephone_Directory.html?id=oblIAAAAYAAJ&redir_esc=y"
                style={styles.link}
                aria-label="Google Books"
              >
                - Google Books
              </a>
            </li>
            <li>
              <a
                href="https://ethiopian-telephone-directory.soft112.com/"
                style={styles.link}
                aria-label="Ethiopian Telephone Directory"
              >
                - Ethiopian Telephone Directory
              </a>
            </li>
            <li>
              <a
                href="https://www.eservices.gov.et/"
                style={styles.link}
                aria-label="Ethiopian Electronic Services"
              >
                - Ethiopian Electronic Services
              </a>
            </li>
            <li>
              <a
                href="https://www.ethiomarket.com/telconverter"
                style={styles.link}
                aria-label="Telconverter"
              >
                - Telconverter
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p style={styles.contact}>Ethiopia, Addis Ababa</p>
          <p style={styles.contact}>
            <a href="tel:+251-911-186021" style={styles.link}>
              +251-911-186021
            </a>
          </p>
          <p style={styles.contact}>
            <a href="tel:+251-991-108991" style={styles.link}>
              +251-991-108991
            </a>
          </p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        &copy; 2025 Ethio-Geez. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
