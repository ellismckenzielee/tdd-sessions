// 😱 blank canvas syndrome!!!
export const getPrices = (basket) => {
  if (basket.length === 0) return 0
  const prices = {
    A: 50,
    B: 30,
  }

  let finalBasket = 0

  for (const item of basket) {
    finalBasket += prices[item]
  }

  return finalBasket
}
