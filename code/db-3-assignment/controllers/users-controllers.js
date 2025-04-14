import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../models/User.js";

const SALT = process.env.SALT
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new userModel({
      username,
      email,
      password: bcrypt.hashSync(password, SALT),
    });

    await newUser.save();
    res
      .status(201)
      .send(
        `${req.body.username}'s account has been created and added to our database`
      );
    console.log(req.body);
  } catch (error) {
    console.log(error); //for the server side
    res.status(400).send(error.message); //for the client
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    //check if the user exists in our db, by verifying username first
    const findUser = await userModel.findOne({ username });
    // if username doesn't exist
    if (!findUser) {
      res
        .status(404)
        .send(
          `The user with the name ${username} doesn't exist in our database`
        );
      // if username exists, check for correct password
    } else {
      const checkPasswordMatch = await bcrypt.compare(
        password,
        findUser.password
      );
      // if password doesn't match, send message
      if (!checkPasswordMatch) {
        res.status(401).send("Incorrect password. You're not authenticated!");
        // if password matches, generate a token
        // that will be be sent every time with your request to check if
        // you're authorized/have permissions to do what you request to do
      } else {
        // jwt.sign generates a JWT token, which can be used for things like
        // authentication and authorization in a web application.
        // Parameters:
        // Payload: The data (usually user information) you want to encode into the JWT.
        // Secret Key: A secret string that is used to sign the JWT and validate its integrity.
        // Options (Optional): Additional configuration options like expiration time, algorithm, etc.
        const generatedToken = jwt.sign(
          { userId: findUser._id, username: username },
          JWT_SECRET_KEY,
          { expiresIn: 1000 * 60 * 60 }
        ); //expires in an hour
        // send a success authentication response,
        // and attach the token to the response for future requests
        // token is stored in the headers
        res.json({
          Message: "Login successful!",
          generatedToken,
          userId: findUser._id,
          username: username,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export { signUp, signIn };
