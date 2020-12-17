import React from 'react'
import {
  Divider,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentCurrency } from '../../redux/products/products.selectors'
import { addItem, removeItem } from '../../redux/cart/cart.actions'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { returnPriceWithCurrency } from '../../redux/products/products.utils'
import { selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from './StripeButton'

const useStyles = makeStyles({
  itemContainer: {
    display: 'flex',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleAndQuantity: {
    maxWidth: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
  },
  button: {
    margin: [[15, 'auto']],
    marginBottom: 30,
  },
})

const MobileCheckoutView = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const currency = useSelector(selectCurrentCurrency)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  const classes = useStyles()

  return (
    <div style={{ marginTop: 65 }}>
      {cartProducts.map((product) => {
        return (
          <Paper key={product.id}>
            <div className={classes.itemContainer}>
              <div>
                <img alt='' src={product.image} style={{ width: 150 }} />
              </div>
              <div className={classes.titleAndQuantity}>
                <Typography className={classes.title}>
                  {product.title}
                </Typography>
                <div>
                  <IconButton
                    aria-label='add'
                    size='medium'
                    onClick={() => dispatch(addItem(product))}
                  >
                    <AddIcon fontSize='inherit' />
                  </IconButton>
                  <Typography style={{ fontWeight: 500, fontSize: '1.2rem' }}>
                    {product.quantity}
                  </Typography>
                  <IconButton
                    aria-label='remove'
                    size='medium'
                    onClick={() => dispatch(removeItem(product))}
                  >
                    <RemoveIcon fontSize='inherit' />
                  </IconButton>
                </div>
              </div>
              <div className={classes.price}>
                <Typography style={{ fontWeight: 500, fontSize: '1.1rem' }}>
                  {returnPriceWithCurrency(currency, product.price)}
                </Typography>
              </div>
            </div>
            <Divider />
          </Paper>
        )
      })}
      <Typography style={{ marginTop: 15 }} variant='h6'>
        TOTAL: {total}
      </Typography>
      <div className='test-warning' style={{ marginTop: 15, color: 'red' }}>
        *Please use the following test credit card for payments
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      <div className={classes.button}>
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  )
}

export default MobileCheckoutView
