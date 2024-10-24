import express from 'express'
const app = express()

const PORT = 4000

app.get('/', (req, res) => {
    console.log('logging from the server')
    res.send(
        `<div>
         <h1>Home Page Banner</h1>
         </div>`
    )
})

app.get('/about', (req, res) => {
    res.send(
        `<div>
         <h4>About Me</h4>
         <p>My name Kareem Samad, I am a full stack developer 
            bootcamp student of Ibt learning Africa, 
            I live in Nigeria and i have great
            passion for coding.</p>
        </div>`
    )
})

app.get('/greet/:username', (req, res) => {
    console.log(req.params)
    res.send(`Hello ${req.params.username}!
Welcome to my webpage`)
})

app.get('/favorite', (req, res) => {
    if (req.query.fave) {
        console.log(req.query)
        res.send(`My favorite thing is ${req.query.fave}`)
    } else {
        res.send(`Error: please enter your hobby`)
    }
})

// server listening at port 4000
app.listen(PORT, () => {
    console.log('listening at this port')
})
