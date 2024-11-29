import express from "express"
const app = express()

const PORT = 4000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/cookie", (req, res) => {
  const {mode} = req.query
 res.cookie("mode", ` ${mode}`)
 res.send("it worked")
})



app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})