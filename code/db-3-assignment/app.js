import express from "express"
import { dbConnect  } from "./db.js"

import recipeRoutes from "./routes/recipes.js"
import usersRoutes from "./routes/users.js"

const app = express()
const PORT = 4000

// TODO: repeat the createrecipe function correctly using the registeruser function

app.use(express.json())
app.use("/recipes", recipeRoutes)
app.use("/authenticate", usersRoutes)


app.listen(PORT, () => {
    console.log(`[server]: App listening on port: ${PORT}`);
    dbConnect()
})