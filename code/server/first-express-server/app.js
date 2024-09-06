// Making My First Express Server
console.log("My testing message to see if this works");

// Once your npm project is set up with express, in your app.js
// 1. Import Express
// 2. create the app object using the express function you imported
// 3. set up your listener on port 4000

// For this assignment, set up each of the following endpoints:

// 1. / — your home endpoint. Send an html <h1> header with a banner for your page
// 2. /about — send a short sentence about yourself
// 3. /greet/:userName — send a template string that greets each person by name
// 4. /favorite — utilize query strings at this endpoint
//  -if a query string fave is included...
//  -send a template string that says "My favorite thing is" and include the value of the query string
//  -example: http://localhost:4000/favorite?fave=eating will produce "My favorite thing is eating"
//  -if fave is not included in the query string, send a sensible message instead

import express from "express" 
const app = express()

app.get("/", (req, res) => {
  console.log("The HomePage");
  res.send("<h1>Welcome to my first Express Server<h1/>")  
})

app.get("/about", (req, res) => {
  res.send("I am Ngozi Clara, a student at IBT Learning Africa, learning software engineering")  
})

app.get("/greet/:userName", (req, res) => {
  console.log(req.params);  
  res.send(`Hello, ${req.params.userName} !`)
})

// app.get("/favorite", (req, res) => {
//   console.log(req.query);  
//   res.send(req.query)  
// })

// app.get("/favorite", (req, res) => {
//   if (req.query.fave) {
//     res.send(`My favorite thing is ${req.query.fave}`)
//   }  else {
//     res.send("My favorite is not included.")
//   }
// })

// // Extra Challenge: Re-write the /favorite endpoint to handle an arbitrary 
// // number of query parameters. Read the keys as well as the values. 

app.get("/favorite", (req, res) => {
  if (req.query.food && req.query.color) {
    res.send(`My favorite is ${req.query.food}. My favorite color is ${req.query.color}`)
  } 
})

app.listen(4000, () => {
  console.log("Listening at port 4000");  
})


