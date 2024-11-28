import express from "express"
import { dbConnect } from "./db.js"
import booksRouter from "./controllers/books.js"
import tokenValidation from "./middlewares/tokenValidation.js"

const app = express()
const PORT = 4000

app.use(express.json())

import router from "./controllers/user.js"
app.use ("/auth", router)
app.use ("/books", tokenValidation, booksRouter)

app.listen(PORT, () => {
    dbConnect()
    console.log(`[server]: Listening on port ${PORT}`)
})