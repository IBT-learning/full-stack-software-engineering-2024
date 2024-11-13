import express from 'express'
import path from 'path'
import fs from 'fs'

const app = express()

const PORT = 4000
const TODO_PATH = "./public/data/data.json"

app.use(express.static('public'))

app.get('/newtodo', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, TODO_PATH))
    console.log('we reach newTodo endpoint');
})

app.get('/newtodo/search', (req, res) => {
    const data = fs.readFileSync(TODO_PATH)
    const todos = JSON.parse(data)
    const Id = req.query.userid
    const eachUserTodos = todos.filter(todo => todo.userId == Id) 
    res.send(eachUserTodos)
    console.log(`we reach userId ${Id} endpoint`);       
})


app.listen(PORT, () => {
   console.log(`server listening on port ${PORT}`);
})
