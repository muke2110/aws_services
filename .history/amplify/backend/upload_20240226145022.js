// backend/routes/upload.js

const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Specify the filename of the uploaded file
  }
});

// Set up multer instance
const upload = multer({ storage: storage });

// Handle POST request to upload endpoint
router.post('/upload', upload.single('file'), (req, res) => {
  // Handle file upload here
  const { title, description } = req.body;
  const file = req.file;

  // Process the uploaded file and form data as needed
  // For example, save the file path and other data to a database
  
  res.status(200).json({ message: 'File uploaded successfully.' });
});

module.exports = router;
