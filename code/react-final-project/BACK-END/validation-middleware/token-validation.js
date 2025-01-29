import jwt from "jsonwebtoken"

const JWT_KEY = process.env.JWT_KEY

const tokenValidator = (req, res, next) => {
  try {
    const { authorization } = req.headers

    let token = authorization

    if (!token) {
      res.status(401).json({
        message:
          "Validation missing. You are not authorized to make that request...",
      })
    } else {
      if (token.includes("Bearer")) {
        token = token.split(" ")[1]
      }

      // decode token to see if it's valid ie.
      // it has not been tampered with or it has not expired
      // the DECODED TOKEN RETURNS A PAYLOAD which has
      // user-related information
      const decodeToken = jwt.verify(token, JWT_KEY)

      // no need to check for validity of the token in the commented code because
      // jwt.verify() will throw an error if the token is invalid/expired
      // which will be handled in the catch block
      // if that was not happening in the catch block then it would be necessary to
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
  } catch (error) {
    console.log(error)
    console.log(error.name)  // for server-side debugging
    console.log(error.message)  // for server-side debugging
    console.log(error.stack) // for server-side debugging

    // the error.stack property in JavaScript is made up of:
    // The name of the error (e.g., ValidationError, TypeError, ReferenceError).
    // The message of the error (e.g., a descriptive message about what went wrong).
    // A stack trace: This lists the sequence of function calls that led to the error, 
    // including file names, line numbers, and sometimes column numbers.

    if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ message: "Invalid Token. You are not authorized..." })
    }

    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Your token has expired. Please log in again..." })
    }

    res.status(500).json({ message: "Internal Server Error..." })
  }
}

export default tokenValidator
