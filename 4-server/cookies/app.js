import express from "express"
const app = express()

const PORT = 4000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/cookie", (req, res) => {
  // res.cookie() adds a new cookie to the response
  // when the browser receives it, it will store the cookie
  // the method takes at least two args, the cookie name and the value
  res.cookie("newVal", "this is a new cookie")
  res.send("sent!")
})

app.get("/color", (req, res) => {
  res.cookie("color", req.query.bgColor, {
    // this optional third argument is the "options" arg
    // it's an object where we can set all other
    // configurations for the cookie, such as expiration
    maxAge: 1000 * 60 * 60 * 24,
  })
  res.redirect("/")
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
