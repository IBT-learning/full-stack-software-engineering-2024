// supertest is a library that's specifically for testing HTTP requests
import request from "supertest"
import { describe, expect, it } from "vitest"
import app from "./app"
import { pizzaPrices, pizzaToppings } from "./utils/pizza"

// see utils/pizza.test.js for the rudimentary testing notes

describe("Pizza API", () => {
  // we can nest a describe() inside another describe(), in order to group tests together
  describe("GET /topppings", () => {
    it("should respond with all toppings when no query param is included", async () => {
      // request() sets up a "test agent" with our endpoints
      // .get() pretends to makea GET request to the given endpoint address
      const response = await request(app).get("/toppings")
      // we should always check that we got the expected response status code
      expect(response.status).toBe(200)
      // .toEqual() is like == and .toStrictEqual() is like ===
      // unlike .toBe() it doesn't require them to have the same identity
      // therefore it can be used with reference types like arrays and objects
      expect(response.body).toStrictEqual(pizzaToppings)
    })
    describe("with inStock query param", () => {
      it("should respond with all toppings when inStock is not true", async () => {
        const response = await request(app).get("/toppings?inStock=false")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(pizzaToppings)
      })
      it("should respond with ONLY in-stock toppings when inStock is true", async () => {
        const response = await request(app).get("/toppings?inStock=true")
        expect(response.status).toBe(200)
        Object.values(response.body).forEach((topping) => {
          expect(topping.inStock).toBe(true)
        })
      })
      it("should respond with ALL in-stock toppings when inStock is true", async () => {
        const response = await request(app).get("/toppings?inStock=true")
        Object.entries(pizzaToppings).forEach(([toppingKey, toppingVal]) => {
          if (toppingVal.inStock) {
            expect(response.body[toppingKey]).toEqual(toppingVal)
          }
        })
        expect(response.status).toBe(200)
      })
    })
    describe("with vegetarian query param", () => {
      it("should respond with all toppings when vegetarian is not true", async () => {
        const response = await request(app).get("/toppings?vegetarian=false")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(pizzaToppings)
      })
      it("should respond with ONLY in-stock toppings when vegetarian is true", async () => {
        const response = await request(app).get("/toppings?vegetarian=true")
        expect(response.status).toBe(200)
        Object.values(response.body).forEach((topping) => {
          expect(topping.vegetarian).toBe(true)
        })
      })
      it("should respond with ALL in-stock toppings when vegetarian is true", async () => {
        const response = await request(app).get("/toppings?vegetarian=true")
        Object.entries(pizzaToppings).forEach(([toppingKey, toppingVal]) => {
          if (toppingVal.vegetarian) {
            expect(response.body[toppingKey]).toEqual(toppingVal)
          }
        })
        expect(response.status).toBe(200)
      })
    })
    describe("with vegetarian AND inStock query params", () => {
      it("should respond with ONLY toppings that are in stock AND vegetarian when both are true", async () => {
        const response = await request(app).get(
          "/toppings?vegetarian=true&inStock=true"
        )
        expect(response.status).toBe(200)
        Object.values(response.body).forEach((topping) => {
          expect(topping.vegetarian).toBe(true)
          expect(topping.inStock).toBe(true)
        })
      })
      it("should respond with ALL toppings that are in stock AND vegetarian when both are true", async () => {
        const response = await request(app).get(
          "/toppings?vegetarian=true&inStock=true"
        )
        Object.entries(pizzaToppings).forEach(([toppingKey, toppingVal]) => {
          if (toppingVal.vegetarian && toppingVal.inStock) {
            expect(response.body[toppingKey]).toEqual(toppingVal)
          }
        })
        expect(response.status).toBe(200)
      })
    })
  })

  describe("POST /order", () => {
    it("should respond with correct price if toppings and size are correct", async () => {
      const orderData = { toppings: ["pepperoni", "peppers"], size: "small" }
      const response = await request(app).post("/order").send(orderData)
      expect(response.status).toBe(201)
      expect(response.body.message).toContain("small pizza")
      expect(response.body.message).toContain("red bell peppers")
      expect(response.body.price).toBe(
        pizzaPrices.getPrice(orderData.toppings, orderData.size)
      )
    })
    it("should reject order if toppings are not correct", async () => {
      const orderData = {
        toppings: ["cheese", "invalid topping"],
        size: "small",
      }
      const response = await request(app).post("/order").send(orderData)
      expect(response.status).toBe(400)
      expect(response.body.message).toBe(
        "invalid topping is not a topping we offer"
      )
    })
    it("should reject order if size is not correct", async () => {
      const orderData = {
        toppings: ["cheese"],
        size: "extra medium",
      }
      const response = await request(app).post("/order").send(orderData)
      expect(response.status).toBe(400)
      expect(response.body.message).toBe("extra medium is not a size we offer")
    })
    it("should reject order if topping is out of stock", async () => {
      const orderData = {
        toppings: ["mushrooms", "cheese"],
        size: "medium",
      }
      const response = await request(app).post("/order").send(orderData)
      expect(response.status).toBe(400)
      expect(response.body.message).toBe("mushrooms is out of stock")
    })
  })
})
