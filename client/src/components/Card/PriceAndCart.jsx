import {
  CardActions,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../redux/cart/cart.actions'
import { selectCurrentCurrency } from '../../redux/products/products.selectors'

const useStyles = makeStyles({
  buttonsDiv: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    paddingLeft: 17,
  },
  addRemoveDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemsAmount: {
    paddingLeft: 4,
    paddingRight: 4,
  },
})

const PriceAndCart = (props) => {
  const { description, id, image, price, title } = props
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const currency = useSelector(selectCurrentCurrency)
  const thisCartItem = cartItems.find((cartItem) => cartItem.id === id)
  let quantity = 0
  if (thisCartItem) {
    quantity = thisCartItem.quantity
  }
  const classes = useStyles()
  return (
    <CardActions disableSpacing={true} style={{ flexDirection: 'column' }}>
      <div className={classes.buttonsDiv}>
        <Typography variant='h6' className={classes.price}>
          {currency === 'USD'
            ? `$${price.USD}`
            : currency === 'CAD'
            ? `CAN$${price.CAD}`
            : currency === 'EUR'
            ? `€${price.EUR}`
            : `$${price.USD}`}
        </Typography>
        <div className={classes.addRemoveDiv}>
          <IconButton
            onClick={() =>
              dispatch(addItem({ description, id, image, price, title }))
            }
            aria-label='add'
          >
            <AddIcon />
          </IconButton>
          <Typography variant='h6' className={classes.itemsAmount}>
            {quantity}
          </Typography>
          <IconButton
            onClick={() =>
              dispatch(removeItem({ description, id, image, price, title }))
            }
            aria-label='delete'
          >
            <RemoveIcon />
          </IconButton>
        </div>
      </div>
    </CardActions>
  )
}

export default PriceAndCart
