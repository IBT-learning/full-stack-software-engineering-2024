import "dotenv/config"
import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT

import { dbConnect } from "./db.js"

import usersAuthRoutes from "./routes/users-auth.js"
import tokenValidator from "./validation-middleware/token-validation.js"
import postsRoutes from "./routes/posts.js"
import usersRoutes from "./routes/users.js"

app.use(express.json())
app.use(cors())

app.use("/4C/auth", usersAuthRoutes)
app.use("/4C/posts", tokenValidator, postsRoutes)
app.use("/4C/profile", tokenValidator, usersRoutes)

app.listen(PORT, () => {
  console.log(`[server]: App listening on port: ${PORT}`)
  dbConnect()
})
