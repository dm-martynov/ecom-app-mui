import sortingAndCurrencyActionTypes from './sortingAndCurrency.types'

export const sortName = (ascDescOrNull) => {
  return {
    type: sortingAndCurrencyActionTypes.SORT_NAME,
    payload: ascDescOrNull,
  }
}

export const sortPrice = (ascDescOrNull) => {
  return {
    type: sortingAndCurrencyActionTypes.SORT_PRICE,
    payload: ascDescOrNull,
  }
}

export const changeCurrency = (currency) => {
  return {
    type: sortingAndCurrencyActionTypes.SET_CURRENCY,
    payload: currency,
  }
}
