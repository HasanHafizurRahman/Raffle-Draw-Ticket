require('dotenv').config('../.env')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

// middleware
app.use(
    [
        morgan('dev'),
        cors()
    ]
)

app.get('/health', (_req, res) => {
    res.status(200).json({message: "success"})
})


module.exports = app;