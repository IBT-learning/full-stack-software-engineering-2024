import mongoose from "mongoose"
import express from "express"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router()

const SALT = process.env.SALT
const JWT_KEY = process.env.JWT_KEY
router.post("/register", async (req, res) => {
    try {
        console.log("request body: ", req.body)
        const { username, email, password} = req.body
        const newUser = new User({
            username,
            email,
            password: bcrypt.hashSync(password, parseInt(SALT))
        })
        await newUser.save()
        res.send(`new user ${req.body.username} added`)
    } catch (err){
        console.error("Error while registering user")
        res.status(404).json({error: "Failed to register user", details: err.message})
    }
    
})

router.post("/login", async (req, res) => {
   try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
        res.send("User not found")
    } else {
        const verified = await bcrypt.compare(password, user.password)
        if (!verified){
            res.send("incorrect password")
        } else {
            // generate a JWT and attach to response
            const token = jwt.sign({ userId: user._id }, JWT_KEY, { 
                expiresIn: 60 * 60 * 24,
            })
            res.json({ message: "user verified", token, user})
        }
    }
   } catch (err){
    res.status(404).send(err)
   }
})

export default router