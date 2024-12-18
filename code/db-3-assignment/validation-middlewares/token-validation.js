import jwt from "jsonwebtoken"

const JWT_SECRET_KEY = "I will make sure you don't hack me!"


const tokenValidator = (req, res, next) => {
    try {
        const { authorization } = req.headers

        let token = authorization
        // check if token is in the headers
        if (!token) {
            // if not/if incorrect, send authorization failed message
            res.status(401).send("Validation token is missing. You are not authorized to make that request!")
            // TODO: HOW TO HANDLE A PRESENT TOKEN THAT IS INCORRECT
        } else {
            // if token exists, check if it's a bearer token, then get the token out
            if (token.includes("Bearer")) token = token.split(" ")[1]
            // for the existing token,
            // verify the token against the secret key to see if it matches our orignal payload
            // or rather, that that token signature is valid and 
            // has not tampered with the integrity of that token
            // or it's not expired
            
            const payload = jwt.verify(token, JWT_SECRET_KEY)
            // if payload doesn't match deny access
            if (!payload) {
                res.status(401).send("You are still not authorized!")
                // if payload matches, we are verified
                // so we can decode the payload or access its contents
                // or call the next function, which is our protected endpoint
                } else {
                    // after verifying the payload, i added a user property to
                    // the req object and assigned its value to payload
                    // hence i can access the properties of the payload in the next function
                    // from the req.user object, the user property is an object
                    // because its assigned value, which is the payload, is an object

                    req.user = payload
                    next()
                }
            
        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

export default tokenValidator