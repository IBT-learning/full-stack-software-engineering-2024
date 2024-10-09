import express from "express"
import { dbConnect } from "./db.js"


const app = express()
const PORT = 4000

app.use(express.json())

import router from "./controllers/recipes.js"
app.use("/recipe", router)

app.listen(PORT, ()=>{  
    dbConnect()
  console.log(`listening on port ${PORT}`);
})
