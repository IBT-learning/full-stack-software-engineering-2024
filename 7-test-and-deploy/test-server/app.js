import express from "express"
const app = express()

import { pizzaToppings, pizzaPrices } from "./utils/pizza.js"

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

export default app
