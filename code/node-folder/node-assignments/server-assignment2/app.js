import express from 'express'
import path from 'path'
import fs from 'fs'

const app = express()

const PORT = 4000
const PATH = path.join(import.meta.dirname, 'static', 'todo.json')

app.use(express.json())
app.use(express.static('static'))

app.get('/json', (req, res) => {
    console.log(`This is a ${req.method} request`);
    res.sendFile(path.join(import.meta.dirname, 'static', 'todo.json'))
    
})

app.get('/todo', (req, res) => {
    console.log(`This is a ${req.method} request to ${req.url.substring(1)}`)
    const list = fs.readFileSync(PATH)
    const lists = JSON.parse(list)
    const userId = parseInt(req.query.userId)
    const user = lists.filter(todo => todo.userId === userId)
    res.json(user)
    // res.sendFile(path.join(import.meta.dirname, 'static', 'index.html'))
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})