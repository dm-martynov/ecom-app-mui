import { Badge, IconButton } from '@material-ui/core'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors'
import CartPopover from './CartPopover'

const CartIconComponent = (props) => {
  const itemsTotal = useSelector(selectCartItemsCount)

  const [anchorElement, setAnchorElement] = useState(null)
  const handleClosePopover = () => {
    setAnchorElement(null)
  }
  return (
    <>
      <IconButton
        onClick={(e) => setAnchorElement(e.currentTarget)}
        edge='start'
        color='inherit'
        aria-label='menu'
      >
        <Badge badgeContent={itemsTotal} color='secondary'>
          <ShoppingCartIcon fontSize='large' />
        </Badge>
      </IconButton>
      <CartPopover
        handleClosePopover={handleClosePopover}
        anchorElement={anchorElement}
      />
    </>
  )
}

export default CartIconComponent
