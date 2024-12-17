import express from "express"
const app = express()
const PORT = 4000

app.use(express.json())

import newRouter from "./controllers/new.js"
app.use ("/new", newRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})