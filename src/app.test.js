import { getPrices } from "./app.js"

describe("testing getPrices function", () => {
  test("given an empty basket, the price is 0", () => {
    // ARRANGE
    const basket = []
    // ACT
    const result = getPrices(basket)
    // ASSERT
    expect(result).toBe(0)
  })

  test("given item 'A', return: 50", () => {
    // Arrange
    const basket = ["A"]
    // Act
    const result = getPrices(basket)
    // Assert
    expect(result).toBe(50)
  })
})
