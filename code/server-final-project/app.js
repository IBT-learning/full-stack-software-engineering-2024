import express from "express"
const app = express()

const PORT = 4000

import blogRoutes from "./routes/routes.js"

app.use(express.json())
app.use(express.static("static"))
app.use("/blogroutes", blogRoutes)


app.get("/", (req, res) => {
    res.redirect("/home.html")
})

app.listen(PORT, () => {
    console.log(`[server]: App listening on port: ${PORT}`)
})