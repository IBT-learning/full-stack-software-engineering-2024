import express from "express"
import { dbConnect } from "./db.js"

const app = express()

const PORT = 4001
app.use (express.json())

import router from "./controllers/recipe.js"
app.use ("/recipe", router)

app.listen(PORT, () => {
    dbConnect()
    console.log(`Connection: Listening on port ${PORT}`)
})