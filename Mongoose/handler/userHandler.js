/******************
 * Title: Handler for Chapter-01
 * Description: Handler for Chapter-01
 * Author: 'Nafe Ibne Dalower'
 * Date: 2023-06-28
 *******************/
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../schema//userschema");
const userModel = new mongoose.model("jwtauth", userSchema);
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
// Sign Up
router.post("/signup", async(req, res) => {
  try{
  const hashedPass = await bcrypt.hash(req.body.Password,10)
  const newUser = new userModel({
    Username: req.body.Username,
    Password: hashedPass,
  })
  await newUser.save();
  res.send("Successfully Sent Data...");
  }catch(err){
    console.log(err)
    res.send('ServerSide Error')
  } 
});

// Login Route
router.post("/login", async(req, res) => {
  try{
  const loginUser = await userModel.find({Username : req.body.Username})
  if(loginUser && loginUser.length > 0){
    const isValidPass = await bcrypt.compare(req.body.Password, loginUser[0].Password)
    if(isValidPass){
      // Generate Token
      const token = jwt.sign({
        Username : loginUser[0].Username,
        userId : loginUser[0]._id,
      },process.env.JWT_Secret,{
        expiresIn: '1h'
      })
      res.send(`Access Token: ${token}`)
    }else{
      res.send('Authentication Failed!')
    }
  }else{
    res.send('Authentication Failed!')
  }
}catch(err){
  console.log(err)
  res.send('Authentication Failed!')
}});

module.exports = router;
