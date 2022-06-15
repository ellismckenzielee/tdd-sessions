// 😱 blank canvas syndrome!!!
export const getPrices = (basket) => {
  const prices = {
    A: 50,
    B: 30,
    C: 20,
    D: 15,
  }
  const discounts = {
    A: [3, 130],
    B: [2, 45],
  }
  let totalPrice = 0
  let itemTally = { A: 0, B: 0, C: 0, D: 0 }
  for (const item of basket) {
    itemTally[item]++
    totalPrice += prices[item]
  }
  Object.keys(discounts).forEach((item) => {
    const numOfDiscounts = Math.floor(itemTally[item] / discounts[item][0])
    const discount = discounts[item][0] * prices[item] - discounts[item][1]
    if (numOfDiscounts) totalPrice -= numOfDiscounts * discount
  })
  return totalPrice
}
