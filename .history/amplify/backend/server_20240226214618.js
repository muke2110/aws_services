// backend/app.js

const express = require('express');
const app = express();
const uploadRouter = require('./upload');

app.use(express.json());

// Mount the upload route
app.use('/api', uploadRouter);

// Other middleware and routes...
app.listen()


module.exports = app;
