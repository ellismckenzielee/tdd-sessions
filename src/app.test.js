
describe("testing getPrices function", () => {
  test("given an empty basket, the price is 0", () => {
    // ARRANGE
    const basket = []
    // ACT
    const result = getPrices(basket)
    // ASSERT
    expect(result).toBe(0)
  })
})
