import { all, call } from 'redux-saga/effects'
import { authSagas } from './auth/auth.sagas'
import { paymentSagas } from './payment/payment.sagas'
import { productsSagas } from './products/products.sagas'

function* rootSaga() {
  yield all([call(productsSagas), call(authSagas), call(paymentSagas)])
}

export default rootSaga
