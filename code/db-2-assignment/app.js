import express from "express"
import { dbConnect } from "./db.js"

import recipeRoutes from "./routes/recipes.js"

const app = express()
const PORT = 4000

app.use(express.json())
app.use("/recipes", recipeRoutes)

app.listen(PORT, () => {
    console.log(`[server]: App listening on port ${PORT}`);
    dbConnect()
})