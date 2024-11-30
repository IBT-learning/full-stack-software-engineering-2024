import jwt from "jsonwebtoken"

const JWT_KEY = process.env.JWT_KEY
const tokenValidation = ( req, res, next) => {
    try {
        const token = req.headers.authorization
    if (!token){
        res.status(401).send("authorization missing")
    } else {
        //verify token
        const payload = jwt.verify(token, JWT_KEY)
        if (!payload){
            res.satus(401).send("user not authorized")
        } else {
            next()
        }
    }
    } catch (err){
        res.send(err)
    }
    
}

export default tokenValidation