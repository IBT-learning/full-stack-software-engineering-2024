import express from "express";
import bcrypt from "bcrypt"
import { mongoose } from "../db.js";
import jwt from "jsonwebtoken"
const router = express.Router()
import User from "../models/User.js"
const SALT =12
const JWT_KEY = "this is a secret"



router.post("/register", async (req, res) => {
    try{

        const {email, password} =req.body
        const newUser = new User({
            email,
            password: bcrypt.hashSync(password, SALT )
        })
        await newUser.save()
        res.send(`successfully registered`)
    }catch(err){
        res.status(500).send(err)
    }
} )

router.post("/login", async (req, res) => {
    try {
      // destructure values from the request body
      const { email, password } = req.body
      // find a user with given username
      const user = await User.findOne({ email })
      if (!user) {
        res.send("unkown email")
      } else {
        // check whether the given password matches our saved, hashed one
        const verified = await bcrypt.compare(password, user.password)
        if (!verified) {
          res.send("incorrect password")
        } else {
          // generate a JWT (JSON Web Token)
          const token = jwt.sign({ userId: user._id, email : user.email }, JWT_KEY, {
            expiresIn: 60 * 60 * 24,
          })
          // attach token and user object to response
          res.json({ message: "user verified", token, user})
        }
      }
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })
  

export default router 

