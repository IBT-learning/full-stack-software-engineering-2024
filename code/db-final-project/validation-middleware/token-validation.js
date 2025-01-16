import jwt from "jsonwebtoken"

const JWT_KEY = process.env.JWT_KEY

const tokenValidator = (req, res, next) => {
  try {
    const { authorization } = req.headers

    let token = authorization

    if (!token) {
      res
        .status(401)
        .json({
          message:
            "Validation missing. You are not authorized to make that request...",
        })
    } else {
      if (token.includes("Bearer")) {
        token = token.split(" ")[1]
      }

      // decode token to see if it's valid ie.
      // it has not been tampered with or it has not expired
      // the decoded token returns a payload which has
      // user-related information
      const decodeToken = jwt.verify(token, JWT_KEY)

    //   no need to check for validity of the token here because
    // jwt.verify() will throw an error if the token is invalid/expired
    // which will be handled in the catch block
    // if that was not happening i the catch block then it would be necessary to 
    // check for the token validity using the commented code below:

    //   if (!decodeToken) {
    //     res
    //       .status(401)
    //       .json({ message: "Could not verify your token..." })
    //   } else {
        req.user = decodeToken
        next()
    //   }
    }
  } catch (err) {
    console.log(err);

    if (err.name === "JSONWebTokenError") {
        return res.status(401).json({ message: "Invalid Token. You are not authorized..." })
    }  

    if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Your token has expired. Please log in again..." })
    }

    return res.status(500).json({ message: "Internal Server Error..." })    
  }
}

export default tokenValidator