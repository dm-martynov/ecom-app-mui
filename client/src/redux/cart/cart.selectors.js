import { createSelector } from 'reselect'
import { selectCurrentCurrency } from '../products/products.selectors'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

// export const selectCartHidden = createSelector(
//   [selectCart],
//   (cart) => cart.hidden
// );

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, rec) => acc + rec.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems, selectCurrentCurrency],
  (cartItems, currency) => {
    if (currency === 'USD') {
      const priceWithCurrency = cartItems.reduce(
        (acc, rec) => acc + rec.quantity * rec.price.USD,
        0
      )

      return `$${priceWithCurrency.toFixed(2)}`
    }

    if (currency === 'CAD') {
      const priceWithCurrency = cartItems.reduce(
        (acc, rec) => acc + rec.quantity * rec.price.CAD,
        0
      )
      return `CAN$${priceWithCurrency.toFixed(2)}`
    }

    if (currency === 'EUR') {
      const priceWithCurrency = cartItems.reduce(
        (acc, rec) => acc + rec.quantity * rec.price.EUR,
        0
      )
      return `€${priceWithCurrency.toFixed(2)}`
    }
  }
)
