import express from "express"
import cors from "cors"
import { dbConnect } from "./db.js"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

import router from "./controllers/books.js"
app.use("/books", router)

app.listen(PORT, () => {
  dbConnect()
  console.log(`[server]: listening on port ${PORT}`)
})
