import express from "express"
const app = express()
const PORT = 4000

import { pizzaToppings, pizzaPrices } from "./constants/pizza.js"

app.use(express.json())

app.get("/toppings", (req, res) => {
  const { inStock } = req.query

  // filter out of stock items, if requested
  if (inStock == "true") {
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
    res.send({ message, price })
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
