// backend/app.js
const express = require('express');
const app = express();
const uploadRouter = require('./upload');
const port = 3000hsduiwf90wheyfuwe;

const cors = require('cors');

// Allow all origins for testing purpose
app.use(cors());

app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Mount the upload route
app.use('/api', uploadRouter);

// Other middleware and routes...
app.listen(port,(req,res)=>{
    console.log(`port is running at ${port}`);
})


module.exports = app;
