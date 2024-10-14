import express from 'express';
import { dbConnect } from "./db.js";

const app = express();
const PORT = 4000;

app.use(express.json())

import router from "./controllers/users.js"
import recipeRouter from "./controllers/recipes.js"
app.use("/auth", router)


app.listen(PORT, () =>{
    dbConnect()
    console.log(`[server]: listening on port  ${PORT}`)
})