//IMPORT dotenv
const dotenv = require('dotenv');
const express = require('express');
const app = express();

//.env
dotenv.config({path: './config.env'});

//DATABASE CONNECTION
require('../db/connection')

//PORT 
const PORT =  process.env.PORT;

//get(path,callback)
app.get('/',(req,res)=>{
    res.send(`Hello world from the server`);
})

//listening to the server
app.listen(PORT,()=>{
    console.log(`Server is running at port no. ${PORT}`)
})