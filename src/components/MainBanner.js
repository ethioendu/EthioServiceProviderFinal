import { NavLink } from "react-router-dom";


const backgroundImage = '/ethioservice.jpg';

const styles = {
  mainBanner: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  body: {
    textAlign: "center",
    marginTop: "20px",
  },
};

const MainBanner = () => {
  return (
    <div style={styles.mainBanner}>
      <div style={styles.container}>
        <div style={styles.headerText}>
          <section style={styles.hero}>
            <div style={styles.body}>
              <h1>We Provide Information About Services in Ethiopia</h1>
              <h1>ኢትዮጵያ ውስጥ ያሉ ድርጅቶችን እዚህ ያገኛሉ</h1>
              <NavLink to="/listing" style={styles.linkButton}>
                View Services in Ethiopia
              </NavLink>
            </div>
          </section>

          <section style={styles.body}>
            <h2 style={styles.h2}>Find Government & Organization Service</h2>
            <div style={styles.hero}>
              <NavLink to="/listing" style={styles.linkButton}>
                Explore Service
              </NavLink>
              <NavLink to="/ServiceForm" style={styles.linkButton}>
                Add Your Service
              </NavLink>
            </div>
          </section>
        </div>  
      </div>
    </div>
  );
};

export default MainBanner;
