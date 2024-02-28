// backend/routes/upload.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadData } = require('aws-amplify/storage');

// Set up multer instance to handle file upload in memory
const upload = multer({
  fileFilter: (req, file, cb) => {
    // Check the file type here
    const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Invalid file type')); // Reject the file
    }
  }
});


// Handle POST request to upload endpoint
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const result = await uploadData({
          key: req.file.originalname,
          body: req.file.buffer,
          options: {
            accessLevel: 'public',
          },
        });
        res.send
        console.log('Upload successful:', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
      
});

router.get('/test',(req,res)=>{
    console.log("this is test");
    res.send("This is test Message")
})

module.exports = router;
