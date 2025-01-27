import express from "express"
const router = express.Router()
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import User from "../models/User.js"
import tokenValidator from "../middleware/tokenValidator.js"

const SALT = Number(process.env.SALT)
const JWT_KEY = process.env.JWT_KEY

// create new account
router.post("/register", async (req, res) => {
    try{
        const {username, password} = req.body
        const newUser = new User({
            username,
            password: bcrypt.hashSync(password, SALT)
        })
    await newUser.save()
    res.send(`${req.body.username} profile created successfully`)
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.post("/login", async (req, res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(!user){
            res.send(" Username not recognized")
        } else {
            const verified = await bcrypt.compare(password, user.password)
            if(!verified){
                res.send("Incorrect password")
            } else {
                const token = jwt.sign({userid: user.id}, JWT_KEY, {
                expiresIn: '24hr'
            })
            res.json({message: "User verified", token, user})
            }
        }
    } catch(err){
        console.log(err)
        res.status(500).send
    }
})

// Fetch user by ID
router.get("/login/:id", tokenValidator, async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });
  

export default router