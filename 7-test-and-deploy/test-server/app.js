import express from "express"
import cors from "cors"
import { pizzaToppings, pizzaPrices } from "./utils/pizza.js"
const app = express()

/* AUTOMATED TESTING

"Manual tests" are what we call the way you've been testing your
code up until now. It's just trying stuff, using the app, and 
watching to make sure it performs how you intend. You will do manual 
tests throughout the development process. Your manual tests should 
always include edge cases, including intentionally triggering errors.

"Automated tests" are written in code, and then run automatically.
We can trigger some or all of them with npm commands, and they
can also be set up to run on a remote environment under certain 
circumstances. For example, imagine a github repository that 
won't allow a pull request to be merged until the tests pass.
Or a deployment pipeline that won't trigger a fresh deployment
unless the tests pass. 

Unit tests are the most common type of tests, and the kind you 
will need to write most often. They test the smallest pieces of 
functionality, one piece at a time. Unit tests inherently do not
require any part of the stack to actually be running. Unit tests 
are almost always written by the developers who write the code. 

Integration tests are the next most common. They test the connections
between the different parts of the app, such as the client, server,
and database. These are sometimes written by developers and sometimes
by QA, or Quality Assurance engieneers. 

End-to-End tests are the least common, they test the *entire* app
all working together at once. They will trigger a user action
and then watch for the correct server calls, database writes, etc. 
They require the app to be fully running and functioning, 
and require a test database to exist (otherwise you'd be writing
fake data to your real database!)

*/

app.use(cors())
app.use(express.json())

app.get("/toppings", (req, res) => {
  // return lists of toppings, filtered by given parameters
  const { inStock, vegetarian } = req.query

  if (inStock == "true" && vegetarian == "true") {
    const includedToppings = Object.fromEntries(
      Object.entries(pizzaToppings).filter(
        ([_, topping]) => topping.vegetarian && topping.inStock
      )
    )
    res.send(includedToppings)
  } else if (vegetarian == "true") {
    const vegToppings = Object.fromEntries(
      Object.entries(pizzaToppings).filter(([_, topping]) => topping.vegetarian)
    )
    res.send(vegToppings)
  } else if (inStock == "true") {
    // filter out of stock items, if requested
    const inStockToppings = Object.fromEntries(
      Object.entries(pizzaToppings).filter(([_, topping]) => topping.inStock)
    )
    res.send(inStockToppings)
  } else {
    res.send(pizzaToppings)
  }
})

app.post("/order", (req, res) => {
  const { toppings, size } = req.body
  try {
    const price = pizzaPrices.getPrice(toppings, size)

    const message = `Your order for a ${size} pizza with ${toppings
      .map((t) => pizzaToppings[t].name)
      .join(", ")} has been placed`
    res.status(201).send({ message, price })
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
})

// note that we are no longer calling app.listen() here
// instead we export the app object
// so that it can be used by both server.js, and app.test.js
export default app
