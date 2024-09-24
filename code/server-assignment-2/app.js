import express from "express";
// console.log(express);
const app = express()

app.get("/", (req, res) => {
    // console.log(req);
    res.send("<h1>My Express Server</h1>")
    
})

app.get("/about", (req, res) => {
    res.send("My name is Habeebah Aleilo, I am a proud mother of 5 beautiful girls")
})

app.get("/greet/:userName", (req, res) => {
    res.send(`Hello ${req.params.userName}!`)
})

// app.get("/favourite", (req, res) => {
//     if(req.query.fave){
//         res.send(`My favourite thing is ${req.query.fave}`)
//     }else{
//         res.send("Let's know your favourite")
//     }
// })

app.get("/favourite", (req, res) => {    
    res.send(`My favourite color is ${req.query.color}. My favourite food is ${req.query.food}. My favourite clothes is ${req.query.clothes}`)
})



app.listen(4000, () => {
    console.log("listening at port 4000");
    
})