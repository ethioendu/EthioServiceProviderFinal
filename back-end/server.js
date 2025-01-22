const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Ethio@1860!Secure', 
  database: 'ethioservice' 
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);
});

app.get('/create-table', (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS services (
      ServiceID INT AUTO_INCREMENT PRIMARY KEY,
      ServiceName VARCHAR(255) NOT NULL
    )
  `;
  db.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err.stack);
      return res.status(500).json({ error: 'Failed to create table' });
    }
    res.json({ message: 'Table created or already exists' });
  });
});


app.post('/add-service', async (req, res) => {
  const { ServiceName } = req.body;

  try {
    const existingService = await Service.findOne({ name: ServiceName });
    if (existingService) {
      return res.status(400).json({ message: 'Service name is already registered.' });
    }

    const newService = new Service({ name: ServiceName });
    await newService.save();
    res.status(201).json({ message: 'Service added successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding service.' });
  }
});

//calling my services table
app.get('/services', (req, res) => {
  const search = req.query.search || '';
  const query = search
    ? 'SELECT ServiceID AS id, ServiceName AS name FROM services WHERE ServiceName LIKE ?'
    : 'SELECT ServiceID AS id, ServiceName AS name FROM services';

  const queryParams = search ? [`%${search}%`] : [];

  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.stack);
      return res.status(500).json({ error: 'Failed to fetch services' });
    }
    res.json(results);
  });
});

//my appointment table


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
    setFeedback("Appointment request sent successfully!");
    setAppointments([...appointments, response.data]);
    setName("");
    setSurname("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error("Error adding appointment:", error);
    setFeedback(`Failed to send appointment request. Error: ${error.message}`);
  }
};


app.get('/appointments', (req, res) => {
  const search = req.query.search || ''; // Optional search query
  let query = 'SELECT * FROM appointments';

  if (search) {
    query += ' WHERE Name LIKE ? OR Surname LIKE ? OR Email LIKE ? OR Message LIKE ?';
  }

  const queryParams = search
    ? [`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`]
    : [];

  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Error fetching appointments:', err.stack);
      return res.status(500).json({ error: 'Failed to fetch appointments' });
    }
    res.status(200).json(results); // Send appointments data as JSON
  });
});

app.post('/add-appointment', (req, res) => {
  const { name, surname, email, message } = req.body;

  if (!name || !surname || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO appointments (Name, Surname, Email, Message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, surname, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting appointment:', err.stack);
      return res.status(500).json({ error: 'Failed to add appointment' });
    }
    res.status(200).json({ message: 'Appointment request sent successfully! ', appointmentId: result.insertId });
  });
});

//my service table
app.post('/add-ServiceForm', (req, res) => {
  const { serviceName, serviceType, openingTime, closingTime } = req.body;

  if (!serviceName || !serviceType || !openingTime || !closingTime) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO ServiceForm (serviceName, serviceType, openingTime, closingTime) VALUES (?, ?, ?, ?)';
  db.query(query, [serviceName, serviceType, openingTime, closingTime], (err, result) => {
    if (err) {
      console.error('Error inserting ServiceForm:', err.stack);
      return res.status(500).json({ error: 'Failed to add ServiceForm' });
    }

    res.status(200).json({ message: 'ServiceForm request sent successfully!', id: result.insertId });
  });
});

// Fetch ServiceForm
app.get('/ServiceForm', (req, res) => {
  const search = req.query.search || '';
  const query = search
    ? 'SELECT id, serviceName, serviceType, openingTime, closingTime FROM ServiceForm WHERE serviceName LIKE ?'
    : 'SELECT id, serviceName, serviceType, openingTime, closingTime FROM ServiceForm';

  const queryParams = search ? [`%${search}%`] : [];

  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Error fetching ServiceForm data:', err.stack);
      return res.status(500).json({ error: 'Failed to fetch ServiceForm data' });
    }
    res.status(200).json(results);
  });
});

























app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
