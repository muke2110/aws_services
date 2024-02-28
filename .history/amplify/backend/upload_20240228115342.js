const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Storage } = require('aws-amplify/storage');
const path = require('path');

// Configure how the files are stored in S3
const uploadToS3 = async (file) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    const newFileName = 'test-'+ uniqueSuffix + fileExtension;

    try {
        // Upload the file to S3
        const result = await Storage.(newFileName, file.buffer, {
            contentType: file.mimetype,
            level: 'public' // Set the appropriate level based on your requirements
        });
        console.log('File uploaded successfully:', result);
        return result.key; // Return the file key in S3
    } catch (error) {
        console.error('Error uploading file to S3:', error);
        throw error;
    }
};

// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');

// Handle POST request to upload endpoint
router.post('/upload', upload, async (req, res) => {
    try {
        const file = req.file;
        const result = await uploadToS3(file); // Upload file to S3
        console.log(result);
        res.send('File uploaded successfully.');
    } catch (error) {
        console.log('Error : ', error);
        res.status(500).json({ message: 'Error uploading file.' });
    }
});

module.exports = router;
