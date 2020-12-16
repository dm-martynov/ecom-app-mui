import { PaymentActionTypes } from './payment.types'

export const paymentFailure = (err) => {
  return {
    type: PaymentActionTypes.PAYMENT_FAILURE,
    payload: err,
  }
}

export const paymentSuccess = () => {
  return {
    type: PaymentActionTypes.PAYMENT_SUCCESS,
  }
}

export const paymentStart = (paymentData) => {
  return {
    type: PaymentActionTypes.PAYMENT_START,
    payload: paymentData,
  }
}
