const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');
const fileRoute = require('./routes/fileRoute');


//Mongodb connect
mongoose.connect(process.env.fileDB, {useNewURlParser: true, useUnifiedTopology:true})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))


//cors
app.use(cors());
// bodyparser
app.use(express.json());

// Route
app.use(fileRoute);

//Port
const PORT = process.env.PORT;
//Server
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})
