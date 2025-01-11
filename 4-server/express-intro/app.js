import express from "express"
const app = express()

// when we make an HTTP GET request
// such as by pointing our browser at this url: localhost:4000/
// this is the function that will be called
app.get("/", (req, res) => {
  console.log(req)
  res.send("hello world")
})

// this one won't fire unless we make a PUT request
app.put("/", (req, res) => {
  console.log("this one won't fire")
  res.send("oops")
})

// we can make as many endpoints as we want
app.get("/hello", (req, res) => {
  res.send("this is a second address")
})

// if we send a string, the browser will interpret it as HTML
app.get("/cat", (req, res) => {
  res.send("<h1>meow</h1>")
})

// this is a "url parameter" or "url param"
// the colon specifies that it's a variable
// in the url, we can put ANY STRING after the /double/
app.get("/double/:num", (req, res) => {
  // whatever string we pass in the url will become req.params.num
  const doubled = req.params.num * 2
  res.send(`${req.params.num} times two is ${doubled}`)
})

// query parameters
// http://localhost:4000/triple?num=6
app.get("/triple", (req, res) => {
  // req.query is a JS object with key/val pairs for each query parameter included in the url
  if (req.query.num) {
    const tripled = req.query.num * 3
    res.send(`${req.query.num} times three is ${tripled}`)
  } else {
    res.send("invalid number provided")
  }
})

app.get("/color", (req, res) => {
  // when we hit this endpoint with a color hex code as a query parameter
  // the background color is set to that hex code
  // this works because GET is the default method and "here" is the default action
  // and for GET requests, forms automatically bundle our form data into query parameters
  res.send(`
          <body style="background-color:${req.query.color}">
              <form>
                  <input type="color" name="color" >
                  <button type="submit">Click me</button>
              </form>
          </body>
      `)
})

// every server must include this!
// we can set any port we want
app.listen(4000, () => {
  console.log(`listening at port 4000`)
})
