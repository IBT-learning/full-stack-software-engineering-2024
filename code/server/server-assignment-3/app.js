import express from "express"
const app = express()

// console.log(app);

app.get("/", (req, res) =>{
    res.send("You called the GET endpoint")
})
app.post("/", (req, res) =>{
    res.send("You called the POST endpoint")
})
app.put("/", (req, res) =>{
    res.send("You called the PUT endpoint")
})
app.delete("/", (req, res) =>{
    res.send("You called the DELETE endpoint")
})



const PORT = 4000
app.listen(PORT, () =>{
    console.log(`Listening to port ${PORT}`);
    
})
