import express from "express"
const app = express()
const PORT = 4000


app.get("/", (req, res) =>{
    res.send("You made a request to the GET endpoint.")
})

app.post("/", (req, res) => {
    res.send("You made a request to the POST endpoint.")
})

app.put("/", (req,res) => {
    res.send("You triggered the PUT endpoint")
})

app.delete("/", (req, res) =>{
    res.send("You sent a request to the DELETE endpoint.")
})


app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}`);
})