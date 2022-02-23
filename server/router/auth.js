const express = require("express");
//router
const router = express.Router();

//DATABASE CONNECTION
require("../db/connection");
//User model
const User = require("../model/userSchema");

//get(path,callback)
router.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

//post request:
router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  //null value validation
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Invalid parameter" });
  }
  //if user is already registered or not checked by email
  User.findOne({ email: email }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: "Email already taken" });
    }
    //saving to Database
    const user = new User({ name, email, phone, work, password, cpassword });
    user
      .save()
      .then(() => {
        res.status(201).json({ message: "Successfully registered" });
      })
      .catch((err) => {
        res.status(500).json({ error: "Failed to register" });
      });
  }).catch(err=>{console.log(err);});
});

module.exports = router;
