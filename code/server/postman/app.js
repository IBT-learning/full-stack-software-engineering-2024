console.log("Testing");

// Set up a new express server
import express from "express"
const app = express()

// Make 4 new endpoints
// Make endpoints for the HTTP methods: GET, POST, PUT, and DELETE
// Each endpoint should give a response that indicates which endpoint
// the user has reached. (For example "You called the POST endpoint")
// Now, make sure you can reach your endpoints via your Postman client!

app.get("/", (req, res) => {
  res.send("You called the GET endpoint")
})

app.post("/", (req, res) => {
  res.send("You called the POST endpoint")
})

app.put("/", (req, res) => {
  res.send("You called the PUT endpoint")
})

app.delete("/", (req, res) => {
  res.send("You called the DELETE endpoint")
})

app.listen(4000, (req, res) => {
console.log("Listening at port 4000");
})


