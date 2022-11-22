require('dotenv').config('../.env')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

// middleware
app.use(
    [
        morgan('dev'),
        cors(),
        express.json()
    ]
)

app.get('/health', (_req, res) => {
    res.status(200).json({message: "success"})
})

app.use((req, _res, next) => {
    const error = new Error('Resource not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if(error.status){
        res.status(error.status).json({
            message: error.message
        })
    }
})

module.exports = app;