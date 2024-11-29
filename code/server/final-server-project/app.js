import express from "express"
import path from "path"
const app = express()
const port = 4000


app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "/public/home.html"))
})

app.listen(`${port}`, ()=> {
    console.log(`listening on port ${port}`);
})