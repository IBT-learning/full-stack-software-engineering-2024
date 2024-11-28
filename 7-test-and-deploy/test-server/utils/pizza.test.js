// vitest is a testing library based on Jest
// it was designed for React/Vite projects
// but we can use it for testing our server as well
import { describe, expect, it } from "vitest"
import { pizzaPrices, pizzaToppings } from "./pizza"

// example test
describe("Vitest test suite", () => {
  it("runs on `npm test`", () => {
    // this will always be true, so this test will always pass
    expect(true).toBe(true)
  })
})

// "describe" is a function that wraps individual tests
// the first argument is a string that we use to describe the set of tests
describe("pizza pricing logic", () => {
  // "it" is function that defines a single test
  it("calculates correct price with no toppings", () => {
    // first we gather the information that we want to test
    const price = pizzaPrices.getPrice([], "large")
    // then we test it!
    // "expect" defines a single assertion, or something we expect to be true/correct
    // .toBe() means the two values will have the same identity
    // (in this case they'll be the same number)
    expect(price).toBe(pizzaPrices.basePrices.large)
  })
  it("should calculate correct price with multiple toppings", () => {
    const price = pizzaPrices.getPrice(["cheese", "peppers"], "large")
    const expectedPrice =
      pizzaPrices.basePrices.large +
      pizzaToppings.cheese.price +
      pizzaToppings.peppers.price

    expect(price).toBe(expectedPrice)
  })
  it("should show error for invalid size", () => {
    // to test that a function throws an error, we must wrap it in a callback
    // otherwise the test will actually run the function and it will actually error!
    const priceRun = () => pizzaPrices.getPrice(["cheese", "peppers"], "big")
    // .toThrow() is true if it throws any error
    expect(priceRun).toThrow()
    // or you can specify a substring that must be included in the error message
    expect(priceRun).toThrow("big is not a size")
    // to match an exact Error message, use .toThrowError() with a new Error object
    expect(priceRun).toThrowError(Error("big is not a size we offer"))
    // the callback we compare doesn't have to be defined separately from the assertion
    // we can write the callback right here in line
    expect(() =>
      pizzaPrices.getPrice(["cheese", "peppers"], "Large")
    ).toThrowError(Error("Large is not a size we offer"))
  })
  it("should show error for invalid toppings", () => {
    // check with ONLY invalid toppings
    expect(() =>
      pizzaPrices.getPrice(["invalid topping"], "small")
    ).toThrowError(Error("invalid topping is not a topping we offer"))
    // check with mix of valid and invalid toppings
    expect(() =>
      pizzaPrices.getPrice(["peppers", "invalid topping"], "small")
    ).toThrowError(Error("invalid topping is not a topping we offer"))
    // check case sensitivity
    expect(() => pizzaPrices.getPrice(["PEPPERS"], "small")).toThrowError(
      Error("PEPPERS is not a topping we offer")
    )
  })
  it("should throw error for out of stock toppings", () => {
    expect(() =>
      pizzaPrices.getPrice(["peppers", "mushrooms"], "small")
    ).toThrowError(Error("mushrooms is out of stock"))
  })
})
