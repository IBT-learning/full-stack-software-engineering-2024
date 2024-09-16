import express from "express"
const app = express()

import booksRouter from "./controllers/books.js"
import authRouter from "./controllers/auth.js"
import usersRouter from "./controllers/users.js"
//console.log(booksRouter)



const PORT = 4000

app.use(booksRouter)
app.use(authRouter)
app.use(usersRouter)

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
