import { combineReducers } from 'redux'
import authReducer from './auth/auth.reducer'
import cartReducer from './cart/cart.reducer'
import sortingAndCurrencyReducer from './sortingAndCurrency/sortingAndCurrency.reducer'

const rootReducer = combineReducers({
  sortingAndCurrency: sortingAndCurrencyReducer,
  cart: cartReducer,
  auth: authReducer,
})

export default rootReducer
