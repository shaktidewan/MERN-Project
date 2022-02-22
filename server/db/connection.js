//FOR DATABASE CONNECTION 
const mongoose = require('mongoose');
//CONNECTING TO DATABASE
const DB = process.env.DATABASE;

//connection
mongoose.connect(DB).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>console.log(`NO connection, ${err}`))