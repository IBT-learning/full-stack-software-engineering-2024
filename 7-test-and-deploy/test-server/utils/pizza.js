export const pizzaToppings = {
  cheese: {
    name: "extra cheese",
    vegetarian: true,
    inStock: true,
    price: 1.5,
  },
  pepperoni: {
    name: "Vitest Farms pepperoni",
    vegetarian: false,
    inStock: true,
    price: 3.5,
  },
  peppers: {
    name: "red bell peppers",
    vegetarian: true,
    inStock: true,
    price: 1.0,
  },
  mushrooms: {
    name: "crimini mushrooms",
    vegetarian: true,
    inStock: false,
    price: 2.0,
  },
}

export const pizzaPrices = {
  basePrices: {
    small: 12.0,
    medium: 15.0,
    large: 19.0,
    extraLarge: 23.0,
  },

  getPrice(toppings, size) {
    // TODO: out of stock!
    // check if topping exists, throw error if not
    toppings.forEach((topping) => {
      if (!pizzaToppings[topping])
        throw new Error(`${topping} is not a topping we offer`)
    })

    // check if size exists, throw error if not
    if (!this.basePrices[size])
      throw new Error(`${size} is not a size we offer`)

    // check if toppings are in stock
    toppings.forEach((topping) => {
      if (!pizzaToppings[topping].inStock)
        throw new Error(`${topping} is out of stock`)
    })

    // calculate price
    const addOns = toppings.reduce((cost, toppingKey) => {
      const price = pizzaToppings[toppingKey].price
      return price ? cost + price : cost
    }, 0)
    return this.basePrices[size] + addOns
  },
}
