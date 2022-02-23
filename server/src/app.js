//IMPORT dotenv
const dotenv = require('dotenv');
const express = require('express');
const app = express();
//.env
dotenv.config({path: './config.env'});

//converting post data into json
app.use(express.json());

//middleware(use) linking to router files to make our route easy
app.use(require('../router/auth'));
//PORT 
const PORT =  process.env.PORT;
//listening to the server
app.listen(PORT,()=>{
    console.log(`Server is running at port no. ${PORT}`)
})