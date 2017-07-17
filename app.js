const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config/database');
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${config.database}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
})

const app = express();

const api = require('./routes/api');

// Port number
const PORT = 3000;

app.use(cors({origin: 'http://localhost:4200'}))

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// api router
app.use('/api', api);

// Index route
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
});