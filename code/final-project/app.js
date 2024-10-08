import express from "express"
import path from "path"
import fs from "fs"
//import { fileURLToPath, pathToFileURL } from "url"

const app = express()

const PORT = 5000

// const publicFile = pathToFileURL(import.meta.url)
// const blogFile = path.dirname(publicFile)

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))


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
    console.log(`app listening on port ${PORT}`)
} )



