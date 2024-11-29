import express from "express"
import { dbConnect } from "./db.js"
import recipeRouter from "./controllers/users.js"

const app = express()

const PORT = 4001
app.use (express.json())

import router from "./controllers/recipe.js"
app.use ("/recipe", router)
app.use ("/users", recipeRouter)

app.listen(PORT, () => {
    dbConnect()
    console.log(`Connection: Listening on port ${PORT}`)
})