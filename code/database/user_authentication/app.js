import express from "express"
import { recipeDb } from "./db.js"
import tokenValidator from "./custom-middleware/middleware.js"
import cookieParser from "cookie-parser"

const app = express()
const PORT = 4000

app.use(express.json())

import userRouter from "./controllers/users.js"
import recipeRouter from "./controllers/recipe.js"

app.use("/auth", userRouter)
app.use("/recipe", recipeRouter)
app.use("/update/:recipeId", tokenValidator, recipeRouter)
app.use("/create", tokenValidator, recipeRouter)
app.use("/findandupdate/:recipeId", tokenValidator, recipeRouter)
app.use("/delete/:recipeId", tokenValidator, recipeRouter)



app.listen(PORT, ()=>{
    recipeDb()
    console.log(`[Server]: listening at PORT ${PORT}`);
})