import express from "express";
const router = express.Router()
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { mongoose } from "../db.js";

import User from "../models/User.js";

const JWT_KEY = "Shh it's a secret"
const SALT = 20


const generateAuthToken = (user) => {
  const token = jwt.sign({ _id: user._id.toString() }, JWT_KEY, { expiresIn: "1h" });
  return token;
};

router.post("/register", async (req, res) => {
  try {
    const {email, password} = req.body
    const  newUser = new User({
        email,
        password: bcrypt.hashSync(password, SALT)
    })
    await newUser.save()
    res.send("User registered")
} catch(err){
    console.log(err)
    res.send(err)
}
})

router.post("/login", async (req, res)=>{
  try{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user && bcrypt.compare(password, user.password)){
      const token = jwt.sign({userId: user._id}, JWT_KEY, {expiresIn: "24h"})  
      res.json({ message: "User Verified", token, user})
    } else {
        res.send("Invalid login credentials")
    }   
  } catch(err){
    console.log(err)
    res.status(500).send(err)
} 
})

export default router