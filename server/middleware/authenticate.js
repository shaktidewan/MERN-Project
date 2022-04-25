 const jwt = require("jsonwebtoken");
 const User = require("../model/userSchema");
//it is middleware
 const Authenticate = async (req,res,next) => {
    try {   
        const token = req.cookies.jwtToken;
        //verify token 
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        //getting user's data
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token":token});

        if(!rootUser){
            throw new Error('User not Found')
        }
        //for future use in BACKEND
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        //going for next step from middleware
        next();

    } catch (error) {
        res.status(401).send('Unauthorized User:No token provided');
        console.log(error);
    }
 }

 module.exports = Authenticate;