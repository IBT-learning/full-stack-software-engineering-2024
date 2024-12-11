// this line reads the .env file and places it
import "dotenv/config"
import express from "express"
import { dbConnect } from "./db.js"
import tokenValidation from "./middlewares/tokenValidation.js"
import cors from "cors"

const app = express()
const PORT = process.env.SERVER_PORT

// we can access any environment variables on process.env
console.log(process.env.ANYTHING)

app.use(express.json())
app.use(cors())

import router from "./controllers/users.js"
import bookRouter from "./controllers/books.js"
app.use("/auth", router)
// we can string together as many middlewares as we want
// as long as each middleware either calls next()
// or sends a response
// in this case, we'll send all requests through
// token validation before they go to the controller
app.use("/books", tokenValidation, bookRouter)

app.listen(PORT, () => {
  dbConnect()
  console.log(`[server]: listening on port ${PORT}`)
})
