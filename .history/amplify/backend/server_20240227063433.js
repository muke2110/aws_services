// backend/app.js

const express = require('express');
const app = express();
const uploadRouter = require('./upload');
const port = 3001;


const cors = require('aws-');

// Allow all origins for testing purposes
app.use(cors());
app.use(express.json());

// Mount the upload route
app.use('/api', uploadRouter);

// Other middleware and routes...
app.listen(port,(req,res)=>{
    console.log(`port is running at ${port}`);
})


module.exports = app;
