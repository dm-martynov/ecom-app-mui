import { createSelector } from 'reselect'

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

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, rec) => acc + rec.quantity * rec.price, 0)
)
