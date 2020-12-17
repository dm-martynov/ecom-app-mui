export const addingProducts = (prevProducts, nextProducts) => {
  return [...new Set([...prevProducts, ...nextProducts])]
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
