import express from "express"
import path from "path"
const app = express()

const PORT = 4000

app.use(express.static("public"))

app.get("/two", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "./public/page2.html"))
})

app.listen(PORT, () => {
    console.log(`app listening for port ${PORT}`)
})