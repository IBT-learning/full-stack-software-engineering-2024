import express from "express"
const app = express()
const PORT = 4000

// import the controllers (we must do this before we can use them!)
import booksRouter from "./controllers/books.js"
import usersRouter from "./controllers/users.js"
import authRouter from "./controllers/auth.js"

// the routers are function objects, so they can be used as middlewares
app.use("/api", booksRouter) // the routes defined in the endpoints will be after "/api"
app.use("/users", usersRouter)
app.use("/auth", authRouter)

app.get("/", (req, res) => {
  res.send("You can still put endpoints in here, but usually we won't")
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})
