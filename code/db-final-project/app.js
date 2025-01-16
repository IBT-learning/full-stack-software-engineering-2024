import "dotenv/config"
import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT

import { dbConnect } from "./db.js"

import postsRoutes from "./routes/posts.js" 
import usersAuthRoutes from "./routes/users-auth.js"
import tokenValidator from "./validation-middleware/token-validation.js"


app.use(cors())
app.use(express.json())
app.use(express.static("static"))

app.use("/4C/posts", tokenValidator, postsRoutes)
app.use("/4C/auth", usersAuthRoutes)

app.get("/", (req, res) => {
    res.redirect("/home.html")
})


app.listen(PORT, () => {
    console.log(`[server]: App listening on port: ${PORT}`);
    dbConnect()
})