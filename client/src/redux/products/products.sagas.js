import { takeLatest, call, put, all } from 'redux-saga/effects'
import productsActionTypes from './products.types'
import {
  toggleProductsLoading,
  getProductsSuccess,
  productsOperationFailure,
  hasMoreProductsToggle,
} from './products.actions'
import { getProductsRequest } from '../../api/api'
// import { getRates } from '../../api/api'
// import productsActionTypes from 'products.types'

// export function* currencyChangeAsync() {
//   try {
//     const rates = yield getRates()
//     const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
//     yield put(fetchRatesSuccess(collectionsMap))
//   } catch (error) {
//     yield put(fetchRatesFailure(error.message))
//   }
// }

// export function* currencyChangeStart() {
//   yield takeLatest(
//     productsActionTypes.SET_CURRENCY,
//     currencyChangeAsync
//   )
// }

export function* getProducts({ payload: { limit, skip } }) {
  try {
    console.log(limit, skip)

    yield put(toggleProductsLoading())
    const products = yield getProductsRequest(limit, skip)
    console.log(products)
    if (products.length) {
      yield put(getProductsSuccess(products))
    } else {
      yield put(hasMoreProductsToggle())
    }
    yield put(toggleProductsLoading())
  } catch (error) {
    yield put(productsOperationFailure(error))
  }
}

export function* onGetProductsStart() {
  yield takeLatest(productsActionTypes.GET_PRODUCTS_START, getProducts)
}

export function* productsSagas() {
  yield all([call(onGetProductsStart)])
}
