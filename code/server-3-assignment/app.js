import express from "express"
const app = express()

app.listen(4000, () => {
    console.log("start the server 3 assignment");
})

/* 
You will make 4 new endpoints, but the endpoints are just placeholders. They don't need to actually do anything other than send a string response.

Make endpoints for the HTTP methods: GET, POST, PUT, and DELETE
Each endpoint can have the same url, with the path argument "/"
Each endpoint should give a response that indicates which endpoint the user has reached. (For example "You called the POST endpoint")
Now, make sure you can reach your endpoints via your Postman client!
*/

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