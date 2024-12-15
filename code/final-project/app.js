import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import path from "path"
import fs from "fs"
import router from "./controllers/users.js"
import { dbConnect } from "./db.js"
//import { fileURLToPath, pathToFileURL } from "url"

const app = express()

const PORT = process.env.PORT

// const publicFile = pathToFileURL(import.meta.url)
// const blogFile = path.dirname(publicFile)
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use("/blog", router)
app.use("/post", )

const blogData = () => {
    const data = fs.readFileSync("./public/blog.json")
    const blog = JSON.parse(data)
    return blog
}
app.get("/", (req, res) => {
    //res.sendFile(path.join(import.meta.dirname, "./public/blog.json"))
    const blog = blogData()

    res.send(blog)
})

app.listen(PORT, () => {
    dbConnect()
    console.log(`app listening on port ${PORT}`)
} )



