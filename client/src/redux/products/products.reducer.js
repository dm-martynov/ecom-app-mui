import productsActionTypes from './products.types'

const INITIAL_STATE = {
  productsLoading: false,
  productsArr: null,
  currency: 'USD',
  sorting: {
    name: null,
    price: null,
  },
  error: null,
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActionTypes.SORT_NAME:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          name: action.payload,
        },
      }

    case productsActionTypes.SORT_PRICE:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          price: action.payload,
        },
      }

    case productsActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }

    case productsActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsArr: action.payload,
        error: null,
      }
    case productsActionTypes.PRODUCTS_OPERATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default productsReducer
