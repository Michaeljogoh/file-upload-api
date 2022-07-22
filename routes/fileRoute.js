const router = require("express").Router();
const upload = require("../utils/multer");
const fileModel = require("../models/fileModel");
const cloudinary = require('cloudinary');
const {getFileUpload , searchFileUpload} = require('../controller/fileController')
require('dotenv').config


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

router.get('/', getFileUpload)

router.post("/uploads", upload.single("image"), async (req, res) => {
  
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new user
    let newUpload = new fileModel({
      title: req.body.title,
      image: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save user
    await newUpload.save();
    res.status(200).json({newUpload});

});


router.get('/search', searchFileUpload)

 module.exports = router;


