import express from "express"
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Description<h1>")
})

app.get("/about",(req,res)=>{
    res.send("<body>I am Taiwo Surakat, from a family of 4 people. I am a twin.<body>")
})

app.get("/greet/:userName",(req,res)=>{
    const userName = req.params.userName
    res.send(`Hello ${userName},Welcome`)
})

app.get("/favorite",(req,res)=>{
    const fave = req.query.fave
    if(fave){
        res.send(`My favorite thing is ${fave}.`);
    } else {
        res.send("This is not my favorite.")
    }
})

app.listen(4000,()=>{
    console.log("my app")
})

