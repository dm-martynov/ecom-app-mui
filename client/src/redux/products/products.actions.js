import productsActionTypes from './products.types'

export const sortName = (ascDescOrNull) => {
  return {
    type: productsActionTypes.SORT_NAME,
    payload: ascDescOrNull,
  }
}

export const sortPrice = (ascDescOrNull) => {
  return {
    type: productsActionTypes.SORT_PRICE,
    payload: ascDescOrNull,
  }
}

export const changeCurrency = (currency) => {
  return {
    type: productsActionTypes.SET_CURRENCY,
    payload: currency,
  }
}

export const getProductsStart = (paginationData) => {
  return {
    type: productsActionTypes.GET_PRODUCTS_START,
    payload: paginationData,
  }
}
export const getProductsSuccess = (productsData) => {
  return {
    type: productsActionTypes.GET_PRODUCTS_SUCCESS,
    payload: productsData,
  }
}

export const toggleProductsLoading = () => {
  return {
    type: productsActionTypes.TOGGLE_PRODUCTS_LOADING,
  }
}

export const productsOperationFailure = (error) => ({
  type: productsActionTypes.PRODUCTS_OPERATION_FAILURE,
  payload: error,
})

export const hasMoreProductsToggle = () => ({
  type: productsActionTypes.PRODUCTS_OPERATION_FAILURE,
})
