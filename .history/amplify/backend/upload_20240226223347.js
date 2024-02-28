// backend/routes/upload.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadData } = require('aws-amplify/storage');

// Set up multer instance to handle file upload in memory
const upload = multer();

// Handle POST request to upload endpoint
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const result = await uploadData({
          key: req.file.originalname,
          body: req.file.buffer,
          options: {
            accessLevel: 'guest',
          },
        });
        console.log('Upload successful:', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
      
});

module.exports = router;