import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer'
import sortingAndCurrencyReducer from './sortingAndCurrency/sortingAndCurrency.reducer'

const rootReducer = combineReducers({
  sortingAndCurrency: sortingAndCurrencyReducer,
  cart: cartReducer,
})

export default rootReducer
