//FOR DATABASE CONNECTION 
const mongoose = require('mongoose');

const express = require('express');
const app = express();

//CONNECTING TO DATABASE
const DB = 'mongodb+srv://shakti:PADAMBISNU12@cluster0.5nwbr.mongodb.net/mernStack?retryWrites=true&w=majority'
//connection
mongoose.connect(DB).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>console.log(`NO connection, ${err}`))
//get(path,callback)
app.get('/',(req,res)=>{
    res.send(`Hello world from the server`);
})

//listening to the server
app.listen(3000,()=>{
    console.log(`Server is running at port no. 3000`)
})