const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//jsonwebtoken
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      //array for multiples of token
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//pre: it will run before post method;next is used for middleware for hashing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    //if password is modified
    this.password = await bcrypt.hash(this.password, 12); //this.password = user's current password
    this.cpassword = await bcrypt.hash(this.cpassword, 12); //this.cpassword = user's current confirm password
  }
  next(); //end of middleware
});

//FOR JSONWEBTOKEN GENERATOR
//userSchema is instance; to use it we need method and getting generateAuthToken method in it from auth.js
userSchema.methods.generateAuthToken = async function () {
  //we are not using arrow fn beacuse it cannot handle this
  try {
    let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    //adding generated tokens to database
    this.tokens = this.tokens.concat({token:token1});//token is from userSchema
    await this.save();
    return token1;
  } catch (error) {
    console.log(error);
  }
};
//creating models i.e. new collections
const User = mongoose.model("USER", userSchema);

//export
module.exports = User;
