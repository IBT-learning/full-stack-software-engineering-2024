import express from "express"
const router = express.Router()
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import User from "../model/User.js"

const SALT = Number(process.env.SALT)
const JWT_KEY = process.env.JWT_KEY

// create new account
router.post("/register", async (req, res) => {
  try {
    // destructure values from the request body
    const { username, email, password } = req.body
    // create a new instance of the User model
    const newUser = new User({
      username,
      email,
      // the password must be hashed with an ecryption algorithm
      // we must never, ever store passwords as plain text
      // the SALT is an arbitrary (but secret) number
      password: bcrypt.hashSync(password, SALT),
    })
    // save new user to DB
    await newUser.save()
    res.send(`new user ${req.body.username} created`)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

router.post("/login", async (req, res) => {
  try {
    // destructure values from the request body
    const { username, password } = req.body
    // find a user with given username
    const user = await User.findOne({ username })
    if (!user) {
      res.send("unkown username")
    } else {
      // check whether the given password matches our saved, hashed one
      const verified = await bcrypt.compare(password, user.password)
      if (!verified) {
        res.send("incorrect password")
      } else {
        // generate a JWT (JSON Web Token)
        const token = jwt.sign({ userId: user._id }, JWT_KEY, {
          expiresIn: 60 * 60 * 24,
        })
        // attach token and user object to response
        res.json({ message: "user verified", token, user })
      }
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

export default router
