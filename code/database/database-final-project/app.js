import "dotenv/config"
import express from "express"
import { blogDB } from "./db.js"
import userRouter from "./controllers/userRoutes.js"
import postRouter from "./controllers/postRoutes.js"

const app = express()
const PORT = process.env.SERVER_PORT || 4000

app.use(express.json())
app.use(express.static("public"))

blogDB()

app.use("/user", userRouter)
app.use("/posts", postRouter)

app.listen(PORT, ()=>{
    console.log(`[server] - listening on PORT ${PORT}`); 
})
