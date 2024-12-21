import express from "express"
const app = express()

app.get("/", (req, res) => {
    console.log(req);
    res.send("<h1> My First Express Server </h>")
})

app.get("/about", (req, res) => {
    console.log(req);
    res.send("My name is Wonder. I am a Kenyan. I am creative thinker, I love providing solutions for problems. I tend to think I am an apt learner")
})

app.get("/greet/:userName", (req, res) => {
    const userName = req.params.userName
    res.send(`Habari yako ${userName}?`)
    
})

app.get("/favorite", (req, res) => {
   
   if (req.query.fave) {
    const fave = req.query.fave
    res.send (`My favorite thing is ${fave}`)
   } else {
    res.send("I don't know your favorite thing to do")
   } 
})

app.listen(4000, () => {
    console.log('listening at port 4000');
    
})