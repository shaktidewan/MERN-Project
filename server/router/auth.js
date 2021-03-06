const express = require("express");
//router
const router = express.Router();
//bcrypt
const bcrypt = require('bcryptjs');
//middleware for about page:
const authenticate = require("../middleware/authenticate");

//DATABASE CONNECTION
require("../db/connection");
//User model
const User = require("../model/userSchema");

//get(path,callback)
router.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

//post request using Async-Await:
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  //null value checking validation
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Invalid parameter" });
  }
  try {
    const userExist = await User.findOne({email: email});
    if (userExist) {
      return res.status(422).json({ error: "Email already taken" });
    }else if(password !== cpassword){
      return res.status(422).json({ error: "Password Mismatched" });
    }else{
      const user = new User({ name, email, phone, work, password, cpassword });
      //pre method for hashing in userSchema is ran
      await user.save();
      res.status(201).json({ message: "Successfully registered" });
    }
  } catch (error) {
    console.log(error);
  }
});

//login route
router.post("/signin", async (req,res) =>{
 try {
    const {email, password} = req.body;
    if(!email || !password){
      return res.status(400).json({error: "Fill all the parameters"})
    }
    const userLogin = await User.findOne({email:email});
    // console.log(userLogin.password);
    if(userLogin){
      const isMatched =  await bcrypt.compare(password,userLogin.password);
      //JSON WEB TOKEN GENERATOR
      const token = await userLogin.generateAuthToken();
      console.log(token);

      //FOR STORING TOKEN IN COOKIES
      res.cookie("jwtToken",token,{
        expires:new Date(Date.now()+25892000000),//expires afte 30 days
        httpOnly:true
      });

      if(!isMatched){
        res.status(400).json({error:'Invalid Credientials'});
      }else{
        res.json({userLogin});
      }
    }else{
      res.status(400).json({error:'Invalid Credientials'});
    }
 } catch (error) {
   console.log(error);
 }
});

//about us page:
//authenticate is middleware, create authenticate named file inside middlwware folder
router.get('/about',authenticate,(req,res) =>{
  res.send(req.rootUser);//rootUser is from authenticate middleware
});

//FOR USER INFORMATION:
router.get('/getData',authenticate,(req,res) =>{
  res.send(req.rootUser);
})

//FOR CONTACT PAGE DATA:
//authneticate is used because user should authenticate to send data to server
router.post('/contact',authenticate,async (req,res) =>{
  try {
      const {name,email,phone,message} = req.body;

      if(!name||!email||!phone||!message){
        console.log("Error in contact form")
        return res.json({error:"please fill the contact form"});
      }

      //finding the user: User is database model
      const userContact = await User.findOne({_id:req.userID});// it is used in authentication middleware:req.userID = rootUser._id;

      //if we get the userID then add message in it
      if(userContact){
        //addMessage is instance that is added later in the collection
          const userMessage = await  userContact.addMessage(name,email,phone,message);

          await userContact.save();
          res.status(201).json({message:"user contact success"})
      }
  } catch (error) {
    console.log(error);
  }
})

//for logout
router.get('/logout',(req,res) =>{
  console.log("User Log out");
  res.clearCookie('jwtToken',{path:'/'})
  res.status(200).send("User Logout");//rootUser is from authenticate middleware
});
module.exports = router;
