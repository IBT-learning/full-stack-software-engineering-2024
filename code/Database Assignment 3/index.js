import "dotenv/config"
import express from 'express';
import { dbConnect } from "./db.js";

const app = express();
const PORT = process.env.SERVER_PORT

console.log(process.env.ANYTHING)

app.use(express.json())

import router from "./controllers/users.js"
import recipeRouter from "./controllers/recipes.js"
app.use("/auth", router)
app.use("/recipes", recipeRouter)

app.listen(PORT, () =>{
    dbConnect()
    console.log(`[server]: listening on port  ${PORT}`)
})