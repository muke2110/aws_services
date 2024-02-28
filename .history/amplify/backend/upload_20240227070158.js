const express = require('express');
const router = express.Router();
const { uploadData } = require('aws-amplify/storage');

// Handle POST request to upload endpoint
router.post('/upload', async (req, res) => {
    try {
        console.log("This entered the upload thing")
        console.log(`user Dda`)
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        
        const file = req.files.file;
        const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'application/pdf'];

        if (!allowedTypes.includes(file.mimetype)) {
            return res.status(400).send('Invalid file type.');
        }

        const result = await uploadData({
            key: file.name,
            data: file.data,
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
