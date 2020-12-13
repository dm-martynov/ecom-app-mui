import { combineReducers } from 'redux'
import authReducer from './auth/auth.reducer'
import cartReducer from './cart/cart.reducer'
import { connectRouter } from 'connected-react-router'
import productsReducer from './products/products.reducer'

const rootReducer = (history) =>
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    router: connectRouter(history),
  })

export default rootReducer
