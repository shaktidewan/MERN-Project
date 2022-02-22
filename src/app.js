const express = require('express');
const app = express();

//get(path,callback)
app.get('/',(req,res)=>{
    res.send(`Hello world from the server`);
})

//listening to the server
app.listen(3000,()=>{
    console.log(`Server is running at port no. 3000`)
})