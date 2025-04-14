import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const tokenValidator = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    let token = authorization;
    // check if token is in the headers
    if (!token) {
      // if not/if incorrect, send authorization failed message
      res
        .status(401)
        .send(
          "Validation token is missing. You are not authorized to make that request!"
        );
      // TODO: HOW TO HANDLE A PRESENT TOKEN THAT IS INCORRECT --- this id done by
    //   jwt.verify()
    } else {
      // if token exists, check if it's a bearer token, then get the token out
      if (token.includes("Bearer")) token = token.split(" ")[1];
      // for the existing token,
      // verify the token against the secret key to see if it matches our orignal payload
      // or rather, that that token signature is valid ie.
      // its integrity has not been tampered with
      // or it's not expired

    // When you verify a JWT (JSON Web Token) using jwt.verify(), it 
    // decodes the token and returns the payload, which can be any data 
    // (often user-related information such as their ID, role, or email). 
      const payload = jwt.verify(token, JWT_SECRET_KEY);
      // if the payload doesn't match ie. it's not decoded,
      // meaning, token is not valid, deny access
      if (!payload) {
        res.status(401).send("You are still not authorized!");
        // if payload matches ie. it's decoded meaning, token is valid, we are verified
        // so we can store the decoded payload in the req object
        // or call the next function, which is our protected endpoint
      } else {
        // after verifying the payload, i added a user property to
        // the req object and assigned its value to payload
        // hence i can access the properties of the payload in the next function
        // from the req.user object; the user property is an object
        // because its assigned value, which is the payload, is an object

        req.user = payload;
        next();
      }
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default tokenValidator;

// The jwt.verify() method is a function provided by the jsonwebtoken library in Node.js 
// to verify the validity of a JSON Web Token (JWT). It checks if the token is valid by 
// verifying its signature and decoding the payload.

// Syntax:
// jwt.verify(token, secretOrPublicKey, [options, callback])
// Parameters:
// token (required): The JWT token you want to verify. It can be in the form of 
// a string (which is the usual format for JWT).

// secretOrPublicKey (required): This is the secret key or the public key that was used to 
// sign the JWT. The secretOrPublicKey ensures the authenticity of the token by 
// comparing the signature with the payload and header.

// options (optional): An object containing options for the verification process. 
// Some common options include:

// algorithms: An array of allowed algorithms (e.g., ['HS256']).
// issuer: Expected issuer of the token.
// audience: Expected audience for the token.
// maxAge: Maximum age of the token (e.g., '1h').
// callback (optional): A callback function that gets called after the verification process. 
// It takes two arguments: err (if there's an error) and 
// decoded (the decoded payload if verification is successful).

// Example Usage:
// 1. Basic Example (Synchronous):

// import jwt from "jsonwebtoken";
// const secretKey = 'your-secret-key';
// const token = 'your-jwt-token-here';

// try {
//   const decoded = jwt.verify(token, secretKey); // Verifying the token
//   console.log('Decoded payload:', decoded);
// } catch (error) {
//   console.error('Token verification failed:', error.message);
// }
// In this example:

// The jwt.verify() method checks if the token is valid using the secretKey.
// If the token is valid, it returns the decoded payload (which is the 
// data that was stored in the token when it was generated).
// If the token is invalid or expired, it throws an error.

// 2. With Callback (Asynchronous):

// import jwt from "jsonwebtoken";
// const secretKey = 'your-secret-key';
// const token = 'your-jwt-token-here';

// jwt.verify(token, secretKey, (err, decoded) => {
//   if (err) {
//     console.error('Token verification failed:', err.message);
//   } else {
//     console.log('Decoded payload:', decoded);
//   }
// });

// 3. Using Options (e.g., for Expiration or Audience Check):

// import jwt from "jsonwebtoken";
// const secretKey = 'your-secret-key';
// const token = 'your-jwt-token-here';

// const options = {
//   algorithms: ['HS256'],      // Specify acceptable algorithms
//   issuer: 'your-app',         // Verify issuer
//   audience: 'your-app-users', // Verify audience
//   maxAge: '1h'                // Max age of token (1 hour)
// };

// try {
//   const decoded = jwt.verify(token, secretKey, options);
//   console.log('Decoded payload:', decoded);
// } catch (error) {
//   console.error('Token verification failed:', error.message);
// }
// What jwt.verify() Does:
// Signature Verification: Ensures that the token was not tampered with by 
// verifying its signature.
// Expiration Check: If the token has an exp (expiration) claim, 
// it checks whether the token has expired.
// Validation of Claims: If options such as issuer, audience, and subject are provided, 
// jwt.verify() ensures they match the values stored in the token.
// Error Handling:
// If the token is invalid, expired, or has any verification failure, 
// jwt.verify() throws an error. Common errors include:

// TokenExpiredError: If the token has expired.
// JsonWebTokenError: If the token is invalid.
// NotBeforeError: If the token is not valid yet (i.e., it's before the nbf claim).
// Conclusion:
// jwt.verify() is an essential method for validating JWTs in applications where 
// authentication and authorization are required. It ensures the integrity and validity of the 
// JWT before using the payload data. Always handle errors appropriately to protect your application 
// from unauthorized access.
