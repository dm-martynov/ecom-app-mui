import { combineReducers } from 'redux'
import sortingAndCurrencyReducer from './sortingAndCurrency/sortingAndCurrency.reducer'

const rootReducer = combineReducers({
  sortingAndCurrency: sortingAndCurrencyReducer,
})

export default rootReducer
