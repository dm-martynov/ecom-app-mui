import { PaymentActionTypes } from './payment.types'

const INITIAL_STATE = {
  status: null,
  error: null,
}

const paymentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaymentActionTypes.PAYMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    case PaymentActionTypes.PAYMENT_SUCCESS:
      return {
        ...state,
        status: 'success',
      }

    default:
      return state
  }
}

export default paymentReducer
