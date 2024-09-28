console.log("Calling the different HTTP endpoints");


import express from 'express'
const app = express ()

app.get("/", (req, res) =>{
    res.send("You called the GET endpoint")
})

app.post("/", (req,res) =>{
    res.send("You called the POST endpoint")
})

app.put("/", (req,res) =>{
    res.send("You called the PUT endpoint")
})

app.delete("/", (req,res) =>{
    res.send("You called the DELETE endpoint")
})


app.listen(4000, () =>{
  console.log('Listening at port 4000');
  
})