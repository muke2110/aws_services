// backend/routes/upload.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadData } = require('aws-amplify/storage');

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
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Use uploadData to upload the file to AWS S3
    const result = await uploadData({
      key: req.file.originalname, // Use original filename as the key
      body: req.file.buffer, // Use file buffer as the data
      options: {
        accessLevel: 'guest', // Specify access level
        // Other options as needed
      },
    });

    console.log('Upload successful:', result);
    res.status(200).json({ message: 'File uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'An error occurred while uploading the file.' });
  }
});

module.exports = router;
