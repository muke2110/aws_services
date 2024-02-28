// backend/app.js

const express = require('express');
const app = express();
const uploadRouter = require('./upload');

app.use(express.json());

// Mount the upload route
app.use('/api', up);

// Other middleware and routes...

module.exports = app;
