import express from "express"
const app = express()
const PORT = 4000

import booksRouter from "./controllers/books.js"
app.use("/books", booksRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
