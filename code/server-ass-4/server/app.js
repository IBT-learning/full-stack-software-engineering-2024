import express from 'express'
import path from 'path'
const app = express()

const PORT = 4000
const TODO_PATH = "./public/data/data.json"

app.use(express.static('public'))

app.get('/newtodo', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, TODO_PATH))
})

app.listen(PORT, () => {
   console.log(`server listening on port ${PORT}`);
})
