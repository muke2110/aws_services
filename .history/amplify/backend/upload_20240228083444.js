const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadData } = require('aws-amplify/storage');
const path = require("path");

const storage = multer.memoryStorage();

const upload = multer({ storage: storage }).single('file');


// Handle POST request to upload endpoint
router.post('/upload', upload, async (req, res) => {
    try {
        const file = req.file;
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
        const result = await uploadData({
            key: filename,
            data: file.buffer,
            contentType: file.mimetype,
            level: 'public' // Set the appropriate level based on your requirements
        });
        console.log('Succeeded: ', result);
        res.send('File uploaded successfully.');
    } catch (error) {
        console.log('Error : ', error);
        res.status(500).send('Error uploading file.');
    }
});

module.exports = router;
