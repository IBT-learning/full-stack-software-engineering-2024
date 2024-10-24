import express from 'express'
const app = express()

const PORT = 4000

// get request
app.get('/api', (req, res) => {
    const response = 'You called the GET endpoint'
    console.log(response)
    res.send(response)
})

// post request
app.post('/api', (req, res) => {
    const response = 'You called the POST endpoint'
    console.log(response)
    res.send(response)
})

// put request
app.put('/api', (req, res) => {
    const response = 'You called the PUT endpoint'
    console.log(response)
    res.send(response)
})

// delete request
app.delete('/api', (req, res) => {
    const response = 'You called the DELETE endpoint'
    console.log(response)
    res.send(response)
})
// server listening at port 4000
app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
})