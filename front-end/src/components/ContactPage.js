import React, { useState, useEffect } from "react";
import axios from "axios";

const styles = {
  contactPage: {
    padding: "60px 0",
    backgroundColor: "#fff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  map: {
    border: "0",
    width: "100%",
    height: "450px",
  },
  form: {
    marginTop: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "none",
    height: "100px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const ContactPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/appointments");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    if (!name || !surname || !email || !message) {
      setFeedback("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/add-appointment", {
        name,
        surname,
        email,
        message,
      });
      setFeedback("Appointment added successfully! thank you we will conntact you soon check your email!");
      setAppointments([...appointments, response.data]);
      setName("");
      setSurname("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding appointment:", error);
      setFeedback("Failed to send appointment request. Please try again.");
    }
  };

  return (
    <div style={styles.contactPage}>
      <div style={styles.container}>
        <div style={{ display: "flex", gap: "30px" }}>
          <div style={{ flex: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142700.56658583536!2d38.7781448!3d8.96317685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e1!3m2!1sen!2set!4v1728128484609!5m2!1sen!2set"
              title="map"
              style={styles.map}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div style={{ flex: 1 }}>
            <h4>To make an appointment through us</h4>
            <form style={styles.form} onSubmit={handleAddAppointment}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                style={styles.input}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
              <textarea
                placeholder="Write here who you want to contact"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={styles.textarea}
              ></textarea>
              <button type="submit" style={styles.button}>
                <i className="fa fa-paper-plane"></i> Send Message
              </button>
            </form>
            {feedback && <p>{feedback}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
