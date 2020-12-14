import { all, call } from 'redux-saga/effects'
import { authSagas } from './auth/auth.sagas'
import { productsSagas } from './products/products.sagas'
// import { productsSagas } from './products/products.sagas'

function* rootSaga() {
  // yield all([call(productsSagas)])
  yield all([call(productsSagas), call(authSagas)])
}

export default rootSaga
