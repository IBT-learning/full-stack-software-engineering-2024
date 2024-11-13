import express from 'express'
const app = express()

sammykareem-server-assignment-2
const PORT = 4000


sammykareem
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
          sammykareem-server-assignment-2
         <h4>About Me</h4>
         <p>My name Kareem Samad, I am a full stack developer 
            bootcamp student of Ibt learning Africa, 

        <a href="localhost:4000/">
        <button>Back</button></a>
         <h4>About Me</h4>
         <p>I am a student of Ibt learning Africa, 
           sammykareem
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
sammykareem-server-assignment-2
})

// server listening at port 4000


   



app.listen(4000, () => {
 sammykareem
    console.log('listening at this port')
})
