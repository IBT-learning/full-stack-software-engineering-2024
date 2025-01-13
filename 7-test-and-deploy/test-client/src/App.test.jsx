import { beforeEach, describe, expect, it, vi } from "vitest"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "./App"
import { pizzaPrices } from "../../test-server/utils/pizza"

// Remember before you begin testing, you must add the test configuration settings
// to vite.config.js

// Mock fetch globally (replace fetch with an empty function)
global.fetch = vi.fn()

describe("Pizza Order App", () => {
  beforeEach(async () => {
    // Clear all mocks before each test
    vi.clearAllMocks()

    // Mock the toppings fetch response
    const allToppings = {
      olives: { name: "Olives", price: 1, vegetarian: true },
      pineapple: { name: "pineapple", price: 2, vegetarian: true },
      tripe: { name: "tripe", price: 3 },
    }
    const vegToppings = {
      olives: { name: "Olives", price: 1, vegetarian: true },
      pineapple: { name: "pineapple", price: 2, vegetarian: true },
    }

    // mock fetch results, depending on endpoint url
    global.fetch.mockImplementation((url) => {
      if (url.includes("/toppings/?vegetarian=true")) {
        return Promise.resolve({
          json: () => Promise.resolve(vegToppings),
        })
      }
      if (url.includes("/toppings")) {
        return Promise.resolve({
          json: () => Promise.resolve(allToppings),
        })
      }
      if (url.includes("/order")) {
        return Promise.resolve({
          json: () => Promise.resolve({ message: "Order submitted" }),
        })
      }
    })

    // render the app into the virtual DOM
    // all actions that change state must be wrapped in act()
    await act(() => render(<App />))
  })

  describe("size radio inputs", () => {
    it("renders pizza size input correctly", () => {
      // check input attributes
      const smallInput = screen.getByLabelText("small")
      expect(smallInput).toBeTruthy()
      expect(smallInput.type).toBe("radio")
      expect(smallInput.id).toBe("small")
      expect(smallInput.name).toBe("pizza-size")

      // check that price is displayed
      const smallContainer = smallInput.closest("div")
      const priceElement = smallContainer.querySelector(".item-price")
      expect(priceElement).toBeTruthy()
      expect(priceElement.textContent).toBe(`$${pizzaPrices.basePrices.small}`)
    })
    it("renders size inputs for all pizza sizes", () => {
      // loop over the sizes, check that each one exists on the page
      Object.keys(pizzaPrices.basePrices).forEach((size) => {
        const sizeInput = screen.getAllByLabelText(size)
        expect(sizeInput).toBeTruthy()
      })
    })
    it("allow selecting size", () => {
      const smallInput = screen.getByLabelText("small")
      expect(smallInput.checked).toBe(false)

      // firing an event executes that action in the rendered virtual DOM
      fireEvent.click(smallInput)
      expect(smallInput.checked).toBe(true)
      // check that multiple clicks don't deselect the option
      fireEvent.click(smallInput)
      expect(smallInput.checked).toBe(true)

      const mediumInput = screen.getByLabelText("medium")
      fireEvent.click(mediumInput)
      // check that a click on a different item changes the selected item
      expect(smallInput.checked).toBe(false)
      expect(mediumInput.checked).toBe(true)
    })
  })

  describe("toppings checkbox inputs", () => {
    it("renders topping inputs correctly", () => {
      // check input attributes
      const tripeInput = screen.getByLabelText("tripe")
      expect(tripeInput).toBeTruthy()
      expect(tripeInput.type).toBe("checkbox")
      expect(tripeInput.id).toBe("tripe")

      // check that price is displayed
      const tripeContainer = tripeInput.closest("div")
      const priceElement = tripeContainer.querySelector(".item-price")
      expect(priceElement).toBeTruthy()
      expect(priceElement.textContent).toBe("$3")
    })
    it("allow selecting toppings", () => {
      const tripeInput = screen.getByLabelText("tripe")
      // select item
      fireEvent.click(tripeInput)
      expect(tripeInput.checked).toBe(true)
      // deselect item
      fireEvent.click(tripeInput)
      expect(tripeInput.checked).toBe(false)

      // other checkboxes do not interfere
      const pineappleInput = screen.getByLabelText("pineapple")
      fireEvent.click(pineappleInput)
      expect(pineappleInput.checked).toBe(true)
      expect(tripeInput.checked).toBe(false)
    })
    it("toggle vegetarian toppings when option is selected", async () => {
      const tripeInput = screen.getByLabelText("tripe")
      expect(tripeInput).toBeTruthy()

      const vegToggle = screen.getByText("Show Vegetarian")
      fireEvent.click(vegToggle)

      // any time we call a fetch, we need to waitFor() the results
      await waitFor(() => {
        // we use queryBy instead of getBy when checking for something to NOT exist
        // because getBy will return an error if the item is not found
        // queryBy will return undefined
        const tripeInput = screen.queryByLabelText("tripe")
        expect(tripeInput).toBeFalsy()
      })

      // turn toggle back off
      fireEvent.click(vegToggle)
      await waitFor(() => {
        const tripeInput = screen.getByLabelText("tripe")
        expect(tripeInput).toBeTruthy()
      })
    })
  })

  describe("order submit button", () => {
    it("disables when no size is selected", () => {
      const submitButton = screen.getByText("Submit Order")
      expect(submitButton.disabled).toBe(true)
    })
    it("enables when a size is selected", () => {
      const mediumInput = screen.getByLabelText("medium")
      fireEvent.click(mediumInput)

      const submitButton = screen.getByText("Submit Order")
      expect(submitButton.disabled).toBe(false)
    })
    it("places an order succesfully", async () => {
      const mediumInput = screen.getByLabelText("medium")
      fireEvent.click(mediumInput)
      const olivesInput = screen.getByLabelText("Olives")
      fireEvent.click(olivesInput)

      const submitButton = screen.getByText("Submit Order")
      fireEvent.click(submitButton)

      await waitFor(() => {
        const message = screen.getByText("Order submitted")
        expect(message).toBeTruthy()
        const orderLink = screen.getByText("Place new Order")
        expect(orderLink).toBeTruthy()
      })
    })
    it("allows return to order form after submission", async () => {
      const mediumInput = screen.getByLabelText("medium")
      fireEvent.click(mediumInput)
      let submitButton = screen.getByText("Submit Order")
      fireEvent.click(submitButton)

      await waitFor(() => {
        const message = screen.getByText("Order submitted")
        expect(message).toBeTruthy()
      })

      const orderLink = screen.getByText("Place new Order")
      fireEvent.click(orderLink)

      submitButton = screen.getByText("Submit Order")
      expect(submitButton.disabled).toBe(true)
    })
  })
})
