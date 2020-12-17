export const addingProducts = (prevProducts, nextProducts) => {
  const ids = new Set(prevProducts.map((product) => product.id))
  const merged = [
    ...prevProducts,
    ...nextProducts.filter((product) => !ids.has(product.id)),
  ]

  return merged
}

export const returnPriceWithCurrency = (currentCurrency, pricesObj) => {
  return currentCurrency === 'USD'
    ? ` $${pricesObj.USD}`
    : currentCurrency === 'CAD'
    ? `CAN$${pricesObj.CAD}`
    : currentCurrency === 'EUR'
    ? ` €${pricesObj.EUR}`
    : ` $${pricesObj.USD}`
}
