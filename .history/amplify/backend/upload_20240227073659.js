const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadData } = require('aws-amplify/storage');

// Define storage for uploaded files
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Handle POST request to upload endpoint
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        console.log("This entered the upload thing");
        console.log('File uploaded:', req.file);

        const file = req.file;
        const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'application/pdf'];

        if (!file || !allowedTypes.includes(file.mimetype)) {
            return res.status(400).send('Invalid file type or no file uploaded.');
        }

        const result = await uploadData({
            key: file.originalname,
            body: file.buffer,
            options: {
                accessLevel: 'public', // Set the access level for the uploaded file

            }
        });

        console.log('Upload successful:', result);
        res.sendStatus(200);
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('An error occurred while uploading the file.');
    }
});

module.exports = router;
