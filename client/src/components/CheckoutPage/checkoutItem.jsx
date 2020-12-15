import React from 'react'
import { connect } from 'react-redux'
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions'
import {
  CheckoutImageContainer,
  CheckoutItemContainer,
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img alt='item' src={imageUrl} />
      </CheckoutImageContainer>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </CheckoutItemContainer>
  )
}

export default connect(null, { clearItemFromCart, addItem, removeItem })(
  CheckoutItem
)
