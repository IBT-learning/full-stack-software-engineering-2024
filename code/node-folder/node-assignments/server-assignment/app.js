import express from 'express'

const app = express()

const PORT = 4000
app.use(express.json())

app.get('/', (req, res) => {
    console.log(`This is a ${req.method} request`);
    const methods = req.method
    res.send(`Hello, You sent a ${methods} request !`)
})

app.post('/', (req, res) => {
    console.log(`This is a ${req.method} request`);
    const methods = req.method
    const { username, password } = req.body
    res.send(`Welcome ${username.charAt(0).toUpperCase() + username.slice(1)}, you sent a ${methods} request!`)
})

app.put('/', (req, res) => {
    console.log(`This is a ${req.method} request`);
    const methods = req.method
    const { username, password } = req.body
    res.send(`Profile updated for ${username.charAt(0).toUpperCase() + username.slice(1)}, you sent a ${methods} request!`)
})

app.delete('/', (req, res) => {
    console.log(`This is a ${req.method} request`);
    const methods = req.method  
    res.send(`You are now logged out, you sent a ${methods} request`)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})