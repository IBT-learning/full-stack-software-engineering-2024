import express, { urlencoded } from "express"


const app = express()

const PORT = 4000

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/send", (req, res) => {
    res.send("sent!")
})

app.get("/mode", (req, res) => {
    res.cookie("color", req.query.banner, {
        maxAge: 10000,
    })
    res.redirect("/")
})

app.listen(4000, () => {
    console.log(`listening on port ${PORT}`)
})