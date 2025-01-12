import express from "express"
import { dbConnect } from "./db.js"
import userValidation from "./middleware/validation.js"
const app = express()
const PORT = 4000

app.use(express.json())
import router from "./controllers/user.js"
import recipeRouter from "./controllers/recipe.js"
app.use("/auth", router)
app.use("/recipe", recipeRouter)

app.listen(PORT, () => {
    dbConnect()
    console.log(`Listening at port  ${ PORT}`);
    
})