const fileModel = require('../models/fileModel');

       

//Get
const getFileUpload = async (req, res) =>{
        // pagination
        const {page = 1 , limit = 5} = req.query
        const  getFiles = await fileModel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
     
     //Get total tweets
     const count = await fileModel.countDocuments();
     res.status(200).json({getFiles , totalPages:Math.ceil(count / limit), currentPage: page})



        }

       

        // search 
const searchFileUpload = async (req , res) =>{
const search = await  fileModel.find({"$or":[{title:{$regex:req.params.id}}]})
               res.status(200);
               res.json({search})
           }



module.exports = {  getFileUpload , searchFileUpload }