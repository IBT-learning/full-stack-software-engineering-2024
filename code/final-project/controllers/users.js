import express from "express"
import User from "../model/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { sanitizeFilter } from "mongoose"

const router = express.Router()
const JWT_KEY = process.env.JWT_KEY
const SALT = Number(process.env.SALT)
router.get("/", async (req, res) => {
    res.json()
})
router.post("/register", async(req, res) => {
    try{
        const {username, email, displayName, password} = req.body

    const blog = new User({
        username,
        email,
        displayName,
        password: bcrypt.hashSync(password, SALT),
    })
    await blog.save()
    res.send (`new user ${username} has been added`)
    } catch(err){
        res.status(404).send(`[message]: ${err.message}}`)
    }
    
})
router.post("/login", async(req, res) => {
    try{
        const {username, password} = req.body
        const blogUser = await User.findOne({username}) 
        if (!blogUser){
            res.status(404).send("user not registered")
        }else{
            const verified = await bcrypt.compare(password, blogUser.password)
            if(!verified){
                res.status(401).send("password incorrect")
            }else{
                const token = jwt.sign({userId: blogUser._id}, JWT_KEY, 
                    {expiresIn: 60 * 60 * 24 * 4})

                res.json({message: "user verified", token, blogUser})
            }
          
        }
    }catch(err){
        res.status(401).send(err.message)
    }
    
})
export default router