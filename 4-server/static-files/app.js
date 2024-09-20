import express from "express"
import path from "path"
const app = express()

const PORT = 4000
// this middleware serves static files from the "public" folder
// (which could be named anything, usually static or public)
// it serves them to the "root" by default
app.use(express.static("public"))

// if we want a url to load a specific file (so that the url won't end in .html)
// we can do so by creating an endpoint for it
app.get("/two", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "public/page2.html"))
})

// express.static() serves "index.html" to "/" by default
// meaning that route is no longer available for other uses
app.get("/", (req, res) => {
  res.send("this doesn't go anywhere anymore!")
})

// but other routes still work fine!
app.get("/beans", (req, res) => {
  res.send("beeeeans!")
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
