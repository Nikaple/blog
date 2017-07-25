const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const api = require('./routes/api');
const config = require('./config/config');
const PORT = config.PORT;

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
  useMongoClient: true
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${config.database}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
})

const app = express();
// Logger
app.use(morgan('dev'));
// Port number
app.use(cors({origin: 'http://localhost:4200'}))
// Static folder
app.use(express.static(path.join(__dirname, 'public')));
// api router
app.use('/api', api);

app.use(function (err, req, res, next) {
  // treat as 404
  if (err.message
    && (~err.message.indexOf('not found')
    || (~err.message.indexOf('Cast to ObjectId failed')))) {
    return next();
  }
  console.error(err.stack);
  // error page
  res.status(500).render('500', { error: err.stack });
});

// assume 404 since no middleware responded
app.use(function (req, res, next) {
  res.status(404).render('404', {
    url: req.originalUrl,
    error: 'Not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
});