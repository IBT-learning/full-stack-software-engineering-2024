import express from "express"
import cookieParser from "cookie-parser"

const app = express()
const PORT = 4000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/cookie", (req, res) => {
    const mode = req.query.mode
    if(mode){
        res.cookie("mode", mode, { maxAge: 24 * 60 * 60 * 1000 })
        res.send("Cookie saved")
    } else {
        res.status(400).send("Mode not provided")
    }
})

app.listen(PORT, () =>{
    console.log(`Listening at port ${PORT}`)
})