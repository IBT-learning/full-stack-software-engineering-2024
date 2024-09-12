import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send("<h1> My First Express Server </h1>")
})

app.get ('/about', (req, res) => {
    res.send("My name is Victory Abayomi. I love music, fantasy books, and coding. I look forward to starting a professional career in full-stack web development")
})

app.get ('/greet/:username', (req, res) => {
    res.send(`Hello ${req.params.username}!`)
})

app.get ('/favorite', (req, res) => {
    const favorite = req.query.fave
    if (favorite){
        res.send (`My favorite thing is ${favorite}`)
    }else{
        res.send ("What do you love to do?")
    }
})

app.listen (4000, () => {
    console.log("listening for port 4000")
})