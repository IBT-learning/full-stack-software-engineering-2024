import express from "express"
const router = express.Router()
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import userSchema from "../models/User.js"


const SALT = 20
const JWT_SECRET_KEY = "I will make sure you don't hack me!"

router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body
        
        const newUser = new userSchema({
            username,
            email,
            password: bcrypt.hashSync(password, SALT)
        })
        
        await newUser.save()
        res.status(201).send(`${req.body.username}'s account has been created and added to our database`)
        console.log(req.body)
    } catch (error) {
        console.log(error);  //for the server side
        res.status(400).send(error.message)  //for the client
    }
})

router.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body

        //check if the user exists in our db, by verifying username first
        const findUser = await userSchema.findOne({ username })
        // if username doesn't exist
        if (!findUser) {
            res.status(401).send(`The user with the name ${username} doesn't exist in our database`)
            // if username exists, check for correct password
        } else {
            const checkPasswordMatch = await bcrypt.compare(password, findUser.password)
            // if password doesn't match, send message
            if (!checkPasswordMatch) {
                res.status(401).send("Incorrect password. You're not authenticated!")
                // if password matches, generate a token 
                // that will be be sent to check if 
                // you're authorized/have permissions to do what you request to do
            } else {
                const generatedToken = jwt.sign({ userId: findUser._id, username: username }, JWT_SECRET_KEY, { expiresIn: 1000 * 60 * 60 }) //expires in an hour
                // send a success authentication response, 
                // and attach the token to the response for future requests
                // token is stored in the headers
                res.json({
                    Message: "Login successful!",
                    generatedToken,  
                    userId: findUser._id,
                    username: username
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

export default router