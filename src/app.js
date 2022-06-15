// 😱 blank canvas syndrome!!!
export const getPrices = (basket) => {
  if (basket.length === 0) return 0
  const prices = {
    A: 50,
    B: 30,
  }
  return prices[basket[0]]
}
