import sortingAndCurrencyActionTypes from './sortingAndCurrency.types'

const INITIAL_STATE = {
  currency: 'USD',
  sorting: {
    name: null,
    price: null,
  },
}

const sortingAndCurrencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sortingAndCurrencyActionTypes.SORT_NAME:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          name: action.payload,
        },
      }

    case sortingAndCurrencyActionTypes.SORT_PRICE:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          price: action.payload,
        },
      }

    case sortingAndCurrencyActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }

    default:
      return state
  }
}

export default sortingAndCurrencyReducer
