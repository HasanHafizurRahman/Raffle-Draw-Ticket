require('dotenv').config('../.env')
const express = require('express');
const {globalErrorHandler, notFoundHandler} = require('./error')

const app = express();

// middleware
app.use(require('./middleware'))

app.use(require('./routes'))

app.use(notFoundHandler)

app.use(globalErrorHandler)

module.exports = app;