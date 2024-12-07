import express from "express"
import "dotenv/config"
import { dbConnect } from "./db.js"
const app = express()
const PORT = process.env.SERVER_PORT

app.use(express.json())
import router from "./controllers/user.js"
import blogRouter from "./controllers/blog.js"
app.use("/auth",  router)
app.use("/blog", blogRouter)


app.listen(PORT, () => {
    dbConnect()
    console.log(`Listening at port  ${ PORT}`);
    
})