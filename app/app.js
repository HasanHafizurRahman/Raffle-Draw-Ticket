const express = require('express');

const app = express();

app.get('/health', (_req, res) => {
    res.status(200).json({message: "success"})
})


module.exports = app;