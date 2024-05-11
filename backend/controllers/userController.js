const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || ! password){
        res.status(400)
        throw new Error("Please fill all fields");
    } 

    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400)
        throw new Error("Email already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password : hashedPassword,
    });

    if(user){
        
        response.status(200).json({
            _id : user.id,
            name : user.name,
            email : user.email

        })
     } else {
            response.status(400)
            throw new Error('Invalid user data')
        }

     res.json({message:'User registered'})
});

const loginUser =asyncHandler (async(req, res) => {
    res.json({message:'User Login'})
});

const getMe =asyncHandler (async(req, res) => {
    res.json({message:'User fetched'})
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
}