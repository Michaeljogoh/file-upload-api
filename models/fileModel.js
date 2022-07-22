const mongoose = require('mongoose');

// create schema
const FileSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    image:{
        type:String
    },
    cloudinary_id:{
        type:String
    }

});


const File = mongoose.model('File', FileSchema );
module.exports = File;