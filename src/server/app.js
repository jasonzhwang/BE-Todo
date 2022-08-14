// require('dotenv').config();
var cors = require('cors')
const express = require('express');
// require('express-async-errors');
// const morgan = require('morgan');
// const errorHandler = require('./middleware/errorHandler');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(cors())
// app.use(morgan('dev'));

app.use('/api', router);

// app.use(validationErrorHandler)
// app.use(errorHandler);

module.exports = app;