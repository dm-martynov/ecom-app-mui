import { takeLatest, put, all, call } from 'redux-saga/effects'
import { paymentFailure, paymentSuccess } from './payment.actions'
import { paymentRequest } from '../../api/api'
import { PaymentActionTypes } from './payment.types'

export function* paymentStart({ payload: { stripePrice, token, currency } }) {
  try {
    yield paymentRequest(stripePrice, token, currency)
    yield put(paymentSuccess())
  } catch (error) {
    yield put(paymentFailure(error))
  }
}

export function* onPaymentStart() {
  yield takeLatest(PaymentActionTypes.PAYMENT_START, paymentStart)
}

export function* paymentSagas() {
  yield all([call(onPaymentStart)])
}
