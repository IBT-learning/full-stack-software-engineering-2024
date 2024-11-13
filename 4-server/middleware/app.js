import express from "express"

const app = express()
const PORT = 4000

const logTime = (req, res, next) => {
    const now = new Date().toLocaleTimeString()
    console.log(`This call was made at ${now}`)
    next()
}

const logBeansTime = (req, res, next) => {
    const now = new Date().toLocaleTimeString()
    const bean = req.url.slice(1)
    console.log(`The time for ${bean} beans is ${now}`)
    next()
}

app.use(logTime)
app.use("/beans", logBeansTime)

app.get("/", (req, res) => {
    res.send("message sent")

})

app.get("/beans", (req, res) => {
    res.send("It's beans time")
})

app.get("/beans/:bean", (req,res) => {
    res.send(`I love ${req.params.bean} beans`)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})