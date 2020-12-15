import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51Hlbo3FMZn8IoxdkloRVlBz8jXWSXEtum4MNlEmZYRh0ffiR4No5pUwEMhN2EoHkudtBoW4YfGYZRCuIvSxoCOib00UHHccT3T'
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful')
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error))
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card'
        )
      })
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRW Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
