import express from "express"
const app = express()

const PORT = 4000

app.post("/", (req, res)=>{
   res.send("You called the POST endpoint")
})

app.get("/", (req, res)=>{
   res.send("You called the GET endpoint")
})

app.put("/", (req, res)=>{
   res.send("You called the PUT endpoint") 
})

app.delete("/", (req, res)=>{
   res.send("You called the DELETE endpoint") 
})

app.listen(PORT, (req, res) =>{
    console.log(`Listening on port ${PORT}`);
    
})