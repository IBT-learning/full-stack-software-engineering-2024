import express from "express"
 import bcrypt from "bcrypt"
 import jwt from "jsonwebtoken"

 import User from "../model/User-Schema.js"

 const Router = express.Router()
 const SALT = process.env.SALT
 const JWT_KEY = process.env.JWT_KEY


 Router.post("/register", async(req, res) =>{
    try{
        const{ username, password} = req.body
    
        //checks if all fields are provided
        if (!username|| !password){
            return res.status(404).send("All fields are required")
        }
        //checks if User already exits
        const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(400).send("Username or email already exists");
            }
        
        const newUser = new User({
            username,
            password: bcrypt.hash(password, SALT)
        })
        await newUser.save()
        res.send(`New user ${req.body.username} created`)
    } catch(err){
        console.log("Error occurred creating new user");
        res.status(500).send("Error occurred creating new user")
    }
    })
    
    Router.post("/login", async(req,res)=>{
        try{
        const{ username,password} = req.body
        const newUser = await User.findOne({username})
        if(!newUser){
            res.status(404).send(`Username ${username} not found`)
        }
        
        const passwordVerified = await bcrypt.compare(password, newUser.password)
        if(!passwordVerified){
            res.status(401).send("Password is incorrect")
        }
            else{
                {
                    // Generate a JWT token
                    const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_KEY, {
                        expiresIn: "1d", // Token validity for 1 day
                    });
                

                res.cookie("token", token, {
                    httpOnly: true, 
                    maxAge: 60 * 60 * 24 * 1000
                  });
                res.json({message: "user verified", token, newUser})
            }
    }
    }catch(err){
        console.error(err);
        res.status(500).send("Server error occurred");
    }
    })

    export default Router
    