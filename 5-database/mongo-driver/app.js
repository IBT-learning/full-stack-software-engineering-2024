import express from "express"
const app = express()
const PORT = 4000

app.use(express.json())

import booksRouter from "./controllers/books.js"
app.use("/books", booksRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
