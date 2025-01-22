import express from "express"
import cors from "cors"
import { dbConnect } from "./db.js"
import tokenValidation from "./middlewares/tokenValidation.js"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())

import router from "./controller/user.js"
import recipeRouter from "./controller/recipe.js"
app.use("/", router)
app.use("/recipe", tokenValidation, recipeRouter)

app.listen(PORT, () => {
  dbConnect()
  console.log(`[server]: listening on port ${PORT}`)
})