import express from 'express'
import {promises as fs} from 'fs'

const app = express()

const PORT = 4000
const USERPATH = 'static/users.json'
const POSTPATH = 'static/posts.json'

app.use(express.json())
app.use(express.static('static'))

app.get('/users', async (req, res) => {
  console.log(`This is a ${req.method} request to ${req.url}`)
  if (req.query.userId) {
    const userId = parseInt(req.query.userId)
    const data = await fs.readFile(USERPATH)
    const decodedData = JSON.parse(data)
    const user = decodedData.find(user => user.id === userId)
    if (user) {
      res.json(user)
    } else {
      res.json({ message: 'User not found' })
    }
  } else {
    const data = await fs.readFile(USERPATH)
    const decodedData = JSON.parse(data)
    res.json(decodedData)
  }
})

app.get('/posts', async(req, res) => {
    console.log(`This is a ${req.method} request to ${req.url}`)
    if (req.query.userId) {
        const userId2 = parseInt(req.query.userId)
        const data2 = await fs.readFile(POSTPATH)
        const decodedData2 = JSON.parse(data2)
        const user2 = decodedData2.filter(user => user.userId === userId2)
        if (user2) {
            res.json(user2)
        } else {
            res.json({ message: 'User not found' })
        }
    } else {
        const data2 = await fs.readFile(POSTPATH)
        const decodedData2 = JSON.parse(data2)
        res.json(decodedData2)
    }  
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})