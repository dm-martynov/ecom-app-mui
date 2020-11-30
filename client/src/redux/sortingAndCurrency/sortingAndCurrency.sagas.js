// import { takeLatest, call, put, all } from 'redux-saga/effects'
// import { getRates } from '../../api/api'
// import sortingAndCurrencyActionTypes from 'sortingAndCurrency.types'

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
//     sortingAndCurrencyActionTypes.SET_CURRENCY,
//     currencyChangeAsync
//   )
// }

// export function* sortingAndCurrencySagas() {
//   yield all([call(currencyChangeStart)])
// }
