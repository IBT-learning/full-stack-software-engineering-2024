import express from "express"
import path from "path"
const app = express()

const PORT = 4000

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/cookie", (req, res) => {

    res.cookie("newVal", "that is a new cookie")
    res.send("sent!")
})

app.get("/color", (req, res) => {
    console.log(req.query)
    res.cookie("color", req.query.bgColor, {
        maxAge:1000 * 60 * 60 * 24 * 7 * 4,
    }) 
    res.redirect("/")
})
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})