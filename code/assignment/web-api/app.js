import express from "express"
import path from "path"
const app = express()


app.get("/", (req, res) => {

    res.sendFile(path.join(import.meta.dirname, "./public/users.json"))
})

app.use(express.static("public"))

const PORT = 4000
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})