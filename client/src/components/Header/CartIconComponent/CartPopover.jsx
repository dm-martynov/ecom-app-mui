import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Popover as PopoverMUI, Typography } from '@material-ui/core/'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartPopoverItem from '../../CheckoutPage/CartPopoverItem'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  buttonWithItems: {
    marginLeft: 82,
    marginTop: 17,
    marginBottom: 17,
  },
  buttonNoItems: {
    display: 'none',
  },
}))

const CartPopover = (props) => {
  const { anchorElement, handleClosePopover } = props
  const classes = useStyles()

  const open = Boolean(anchorElement)
  const id = open ? 'popover' : undefined
  const history = useHistory()
  const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <PopoverMUI
      id={id}
      open={open}
      anchorEl={anchorElement}
      onClose={handleClosePopover}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <div style={{ maxHeight: 342, overflow: 'auto' }}>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartPopoverItem key={cartItem.id} item={cartItem} />
          })
        ) : (
          <Typography
            style={{
              marginLeft: 90,
              marginRight: 90,
              marginTop: 50,
              marginBottom: 50,
            }}
            color='secondary'
          >
            Your cart is empty
          </Typography>
        )}
      </div>
      <Button
        className={
          cartItems.length ? classes.buttonWithItems : classes.buttonNoItems
        }
        onClick={() => history.push('/checkout')}
        variant='outlined'
        color='primary'
      >
        GO TO CHECKOUT
      </Button>
    </PopoverMUI>
  )
}

export default CartPopover
