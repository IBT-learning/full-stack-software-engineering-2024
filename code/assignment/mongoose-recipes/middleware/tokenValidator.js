import jwt from "jsonwebtoken"
import User from "../models/User.js"

const JWT_KEY = "secret"
const tokenValidator = async (req, res, next) => {
    try{
        const token = req.headers.authorization 
    if (!token){
        res.send("User not authorized")
    } else {
        const payload = jwt.verify(token, JWT_KEY)
        if (!payload) {
            res.status(401).send("user not verified")
        }
        const user = await User.findById(payload.userId).select("-password")
        if (!user){
            res.status(404).send("user not found")
        }

        req.user = user
        next()
       
    }
    } catch (err){
        res.status(401).send(err)
    }
}

export default tokenValidator