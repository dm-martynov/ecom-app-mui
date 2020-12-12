import { all, call } from 'redux-saga/effects'
import { authSagas } from './auth/auth.sagas'
// import { sortingAndCurrencySagas } from './sortingAndCurrency/sortingAndCurrency.sagas'

function* rootSaga() {
  // yield all([call(sortingAndCurrencySagas)])

  yield all([call(authSagas)])
}

export default rootSaga
