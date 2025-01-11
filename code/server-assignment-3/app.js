import express from "express"
const app = express()

const PORT = 4000

app.get("/create",(req,res)=>{
    res.send(`You called the GET endpoint`)
    })

app.post("/read",(req,res)=>{
    res.send(`You called the POST endpoint`)
})

app.put("/update",(req,res)=>{
    res.send(`You called the PUT endpoint`)
})

app.delete("/delete",(req,res)=>{
    res.send(`You called the DELETE endpoint`)
})
    
app.listen(PORT,(req,res)=>{
        console.log(`listening on port ${PORT}`)
})