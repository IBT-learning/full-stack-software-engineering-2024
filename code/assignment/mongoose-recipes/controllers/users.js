import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import User from "../models/User.js"
import jwt from "jsonwebtoken"

const recipeRouter = express.Router()
const SALT = 10
const JWT_KEY = "secret"

recipeRouter.post("/register", async (req, res) => {
   try{
    const { username, email, password } = req.body

    const newUser = new User({
        username,
        email,
        password: bcrypt.hashSync(password, SALT)
    })
    await newUser.save()
    res.send(`new user ${req.body.username} added`)
   } catch (err){
    res.status(404).send(err)
   }
})
recipeRouter.post("/login", async (req, res) => {
    try{
        const { username, password } = req.body
        const user = await User.findOne({username})
         if (!user){
            res.send("User not found")
         } else {
            const verified = await bcrypt.compare(password, user.password)
            if (!verified){
                res.send("Password incorrect")
            } else {
                const token = jwt.sign({ userId: user._id }, JWT_KEY, {
                    expiresIn: 60 * 60 * 24 * 3
                })
                res.json({message: "User verified", token, user})
            }
         }

    } catch(err){
        res.status(401).send(err)
    }
})


export default recipeRouter