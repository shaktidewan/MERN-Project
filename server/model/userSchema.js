const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

//pre: it will run before post method;next is used for middleware for hashing
userSchema.pre('save', async function(next){
    if(this.isModified('password')){//if password is modified
        this.password = await bcrypt.hash(this.password,12);//this.password = user's current password
        this.cpassword = await bcrypt.hash(this.cpassword,12);//this.cpassword = user's current confirm password
    }
    next()//end of middleware
})

//creating models i.e. new collections
const User = mongoose.model('USER',userSchema);

//export
module.exports = User;
