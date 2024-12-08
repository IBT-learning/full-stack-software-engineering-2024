import express from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const router = express.Router()
import User from "../model/User.js";
import { mongoose } from "../db.js";

const SALT =process.env.SALT
const JWT_KEY = process.env.JWT_KEY



router.post("/register", async (req, res) => {
    try{

        const {username, password} =req.body
        const newUser = new User({
            username,
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
      const { username, password } = req.body
      const user = await User.findOne({ username })
      if (!user) {
        res.send("unkown username")
      } else {
        const verified = await bcrypt.compare(password, user.password)
        if (!verified) {
          res.send("incorrect password")
        } else {
          // generate a JWT (JSON Web Token)
          const token = jwt.sign({ userId: user._id, username: user.username }, JWT_KEY, {
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