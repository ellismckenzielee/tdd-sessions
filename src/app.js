// 😱 blank canvas syndrome!!!
export const getPrices = (basket) => {
  if (basket.length === 0) return 0
  const prices = {
    A: 50,
    B: 30,
    C: 20,
    D: 15,
  }

  let itemTally = basket.reduce(function (allSkus, sku) {
    if (sku in allSkus) {
      allSkus[sku]++
    } else {
      allSkus[sku] = 1
    }
    return allSkus
  }, {})

  let finalBasket = 0

  for (const item of basket) {
    finalBasket += prices[item]
  }
  //   const discounts = {
  //     A: [3, 130]
  //   }
  //   finalBasket -= ()

  // Now we have the total price
  // Create an object which contains the discount
  // Find the number of times the discount needs to be applied
  // Remove the discount from total price

  return finalBasket
}
