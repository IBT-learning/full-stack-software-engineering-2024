import express from "express"
import path from "path"
const app = express()

const PORT =4000

app.use(express.static("static"))

app.get("/todo", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "/static/index.json"))
})

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})