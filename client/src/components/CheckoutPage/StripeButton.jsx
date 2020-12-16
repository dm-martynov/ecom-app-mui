import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentCurrency } from '../../redux/products/products.selectors'
import { paymentStart } from '../../redux/payment/payment.actions'

const StripeCheckoutButton = ({ price }) => {
  let stripePrice

  if (price.includes('$')) {
    stripePrice = price.split('$')
  } else {
    stripePrice = price.split('€')
  }

  stripePrice = parseFloat(stripePrice[1]) * 100
  const currency = useSelector(selectCurrentCurrency)
  const dispatch = useDispatch()

  const publishableKey =
    'pk_test_51Hlbo3FMZn8IoxdkloRVlBz8jXWSXEtum4MNlEmZYRh0ffiR4No5pUwEMhN2EoHkudtBoW4YfGYZRCuIvSxoCOib00UHHccT3T'

  const onToken = (token) => {
    dispatch(paymentStart({ stripePrice, token, currency }))
    // axios
    //   .post(
    //     'http://localhost:5000/api/payment',

    //     {
    //       amount: stripePrice,
    //       token,
    //       currency,
    //     }
    //   )
    //   .then((response) => {
    //     alert('Payment successful')
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     alert(
    //       'There was an issue with your payment. Please make sure you use the provided credit card'
    //     )
    //   })
    // alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRW Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
