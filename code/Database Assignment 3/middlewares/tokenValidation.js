import jwt from "jsonwebtoken"
import User from "../model/User.js"

const JWT_KEY = 'this is a secret'

const tokenValidation = async (req,res,next) => {
    try{

        let token = req.headers.authorization
        if (!token){
            res.status(401).send("authorization missing")
        } else {
            if (token.includes("Bearer")) token = token.split(" ")[1]

            const payload = jwt.verify(token, JWT_KEY)
            if(!payload) {
                res.status(401).send("user not authorized")
            } else {
                const user = await User.findById(payload.userId);
                req.user = user;
                next()
            }
        }
    } catch (err){
        console.log(err)
        res.send(err)
    }
}

export default tokenValidation