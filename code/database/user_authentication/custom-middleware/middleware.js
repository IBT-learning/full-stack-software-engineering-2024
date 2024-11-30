import jwt from "jsonwebtoken"
const JWT_KEY = "secret key"

const tokenValidator = (req, res, next) =>{
    try{
     const token = req.headers.authorization?.split(' ')[1];
      console.log("authorization:", req.headers.authorization);
      
      //checks for token
    if (!token){
      return res.status(401).send("Token not provided")
    }
    else{
      //verify token
      const payload = jwt.verify(token, JWT_KEY)
      console.log("Token Payload:", payload);
      if(!payload || !payload.userId){
       return res.status(401).send("user not authorized")
      }
      req.user = { _id: payload.userId }; 
      console.log("req.user in middleware:", req.user);
      return next()
    }
  }catch(err){
    console.log(err);
    
    res.send(err);
  }
  }

  export default tokenValidator