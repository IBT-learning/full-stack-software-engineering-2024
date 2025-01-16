import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { mongoose } from "../db.js"
import User from "../models/User.js"
//user-model, always capitalized unless more than one word,
// which will use the camelCase format

const SALT = Number(process.env.SALT)
const JWT_KEY = process.env.JWT_KEY

const createAccount = async (req, res) => {
  try {
    const { username, email, password } = req.body

    // check if there are any missing fields
    if (!username || !email || !password ) {
        return res.status(400).json({ message: "Please fill in all the required fields..." })
    }

    // check if username exists
    const existingUserName = await User.findOne({ username })
    if (existingUserName) {
        return res.status(409).json({ message: "That username is already in use. Please use a different username..." })
    }

    // check if email exists
    const existingEmail = await User.findOne({ email })
    if (existingEmail) {
        return res.status(409).json({ message: "That email is already in use. Please use a different email..." })
    }

    // if all checks pass create new user
    const newUser = new User({
      username,
      email,
      password: bcrypt.hashSync(password, SALT),
    })
    await newUser.save()

    res
      .status(201)
      .json({ message: "Your account has been created successfully..." })
  } catch (err) {
    console.log(err) // for server-side debugging
    res.status(500).json({ message: "There was an issue creating your account. Please try again..." }) // client-side error
  }
}

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body

    const findUser = await User.findOne({ username })
    if (!findUser) {
      res
        .status(404)
        .json({ message: "That username does not exist in our database" })
    } else {
      // await because it returns a promise
      const passwordMatch = await bcrypt.compare(password, findUser.password)
      if (!passwordMatch) {
        res.status(401).json({ message: "Invalid username or password" })
      } else {
        // jwt.sign({payload}, secretkey, {options})
        const token = jwt.sign({ userId: findUser._id, username }, JWT_KEY, {
          expiresIn: 1000 * 60 * 60 * 24,
        })
        // expires is a day
        res.json({
            message: "Login successful...",
            token,
            userId: findUser._id,
            username
        })
      }
    }
  } catch (err) {
    console.log(err); // for server-side debugging
    res.status(500).json({ message: "Something went wrong! Please try again..." }) // for client-side debugging
    
  }
}

export { createAccount, logIn }