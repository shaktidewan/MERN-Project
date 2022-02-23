const express = require('express');
//router
const router = express.Router();

//get(path,callback)
router.get('/',(req,res)=>{
    res.send(`Hello world from the server`);
});

//post request:
router.post('/register',(req,res)=>{
    console.log(req.body);
    res.json({message: req.body});
});

module.exports = router;