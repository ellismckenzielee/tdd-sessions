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

  test("given item 'B', return: 30", () => {
    // Arrange
    const basket = ["B"]
    // Act
    const result = getPrices(basket)
    // Assert
    expect(result).toBe(30)
  })
  test("given item 'C', return: 20", () => {
    // Arrange
    const basket = ["C"]
    // Act
    const result = getPrices(basket)
    // Assert
    expect(result).toBe(20)
  })
  test("given item 'D', return: 15", () => {
    // Arrange
    const basket = ["D"]
    // Act
    const result = getPrices(basket)
    // Assert
    expect(result).toBe(15)
  })

  test("given basket 'A, B', return: 80", () => {
    // Arrange
    const basket = ["A", "B"]
    // Act
    const result = getPrices(basket)
    // Assert
    expect(result).toBe(80)
  })
  test("given basket 'A, B', return: 80", () => {
    // Arrange
    const basket = ["A", "B"]
    // Act
    const result = getPrices(basket)
    // Assert
    expect(result).toBe(80)
  })
//   test("given basket 'A, A, A', return discounted price: 130", () => {
//     // Arrange
//     const basket = ["A", "A", "A"]
//     // Act
//     const result = getPrices(basket)
//     // Assert
//     expect(result).toBe(130)
//   })
})
