import express from "express"
const app = express()

const PORT = 4000

// middlewares intervene in the call stack
// they inject logic of our choice into the req-res cycle

// a middleware is a function with the params:
// request, response, next
// next refers to the next function in the call stack
// every middleware must either call next() or send a response
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

// app.use applies middleware functions to the given routes
// or to all routes, if a route is not specified
app.use("/beans", logBeansTime)
app.use(logTime)

// these endpoints won't be hit until after the middlewares have been applied
app.get("/", (req, res) => {
  res.send("message sent")
})

// the ones with the matching route will have *both* middlewares applied
app.get("/beans", (req, res) => {
  res.send("it's beans time")
})

app.get("/beans/:bean", (req, res) => {
  res.send(`I love ${req.params.bean} beans`)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
