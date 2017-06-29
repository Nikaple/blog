const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${config.database}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
})

const app = express();

const users = require('./routes/users');

// Port number
const PORT = 3000;

// CORS MW
app.use(cors());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser MW
app.use(bodyParser.json());

// User router
app.use('/users', users);

// Index route
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
});