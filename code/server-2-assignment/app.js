
import express from "express"
const app = express()

app.listen(4000, () => {
    console.log("Setting up my first server...):");    
})

app.get("/", (req, res) => {
    res.send("<h1>REVIVE YOUR 4C HAIR!</h1>")
})

app.get("/about", (req, res) => {
    res.send("I am an absolute natural hair girlie, and I would rock my 4C black girl magic anyday, anytime...")
})

// url params
app.get("/greet/:username", (req, res) => {
    const yourname = req.params.username
    res.send(`Hello ${yourname}! It's a pleasure to meet you...):`)
})

// query params
app.get("/favorite", (req, res) => {
    if (req.query.fave) {
        const fave = req.query.fave
        res.send(`My favorite thing is ${fave}`);
        
    } else {
        res.send("Are you self aware?")
    }
})

app.get("/favorite", (req, res) => {
    const fave = req.query.fave
    if (req.query.fave+=req.query.fave) {
        res.send(`My favorite thing to do is ${fave}`)
    } else {
        res.send("Write only one thing you love to do")
    }
})