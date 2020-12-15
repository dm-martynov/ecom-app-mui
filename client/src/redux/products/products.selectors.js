import { createSelector } from 'reselect'

const selectProducts = (state) => {
  return state.products
}

export const selectProductsArr = createSelector(
  [selectProducts],
  (products) => products.productsArr
)

export const selectAndFilterProductsByPriceAsc = createSelector(
  [selectProductsArr],
  (productsArr) => {
    const productsArrCopy = [...productsArr]

    return productsArrCopy.sort((a, b) => {
      return parseFloat(a.price.USD) - parseFloat(b.price.USD)
    })
  }
)

export const selectAndFilterProductsByPriceDesc = createSelector(
  [selectProductsArr],
  (productsArr) => {
    const productsArrCopy = [...productsArr]

    return productsArrCopy.sort((a, b) => {
      return parseFloat(b.price.USD) - parseFloat(a.price.USD)
    })
  }
)

export const selectAndFilterProductsByTitleAsc = createSelector(
  [selectProductsArr],
  (productsArr) => {
    const productsArrCopy = [...productsArr]

    return productsArrCopy.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
      return 0
    })
  }
)

export const selectAndFilterProductsByTitleDesc = createSelector(
  [selectProductsArr],
  (productsArr) => {
    const productsArrCopy = [...productsArr]

    return productsArrCopy.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1
      if (a.title.toLowerCase() > b.title.toLowerCase()) return -1
      return 0
    })
  }
)
