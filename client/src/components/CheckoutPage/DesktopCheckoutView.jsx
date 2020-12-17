import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, TableFooter, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions'
import ClearIcon from '@material-ui/icons/Clear'
import { selectCartTotal } from '../../redux/cart/cart.selectors'
import { selectCurrentCurrency } from '../../redux/products/products.selectors'
import StripeCheckoutButton from './StripeButton'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    width: '70vw',
    margin: 'auto',
    marginTop: 125,
  },
  total: {},
  button: {
    margin: [[15, 'auto']],
  },
})

const DesktopCheckoutView = () => {
  const classes = useStyles()
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const currency = useSelector(selectCurrentCurrency)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='checkout table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Image</TableCell>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Quantity</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell align='center'>
                  <img alt='' src={product.image} style={{ width: 150 }} />
                </TableCell>
                <TableCell align='center'>{product.title}</TableCell>
                <TableCell align='center'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                    }}
                  >
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
                </TableCell>
                <TableCell align='center'>
                  <Typography style={{ fontWeight: 500, fontSize: '1rem' }}>
                    {currency === 'USD'
                      ? ` $${product.price.USD}`
                      : currency === 'CAD'
                      ? `CAN$${product.price.CAD}`
                      : currency === 'EUR'
                      ? ` €${product.price.EUR}`
                      : ` $${product.price.USD}`}
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <IconButton
                    aria-label='remove all'
                    size='medium'
                    onClick={() => dispatch(clearItemFromCart(product))}
                  >
                    <ClearIcon fontSize='inherit' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} align='right' variant='footer'>
                <Typography variant='h6'>TOTAL: {total}</Typography>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <div className='test-warning' style={{ marginTop: 30, color: 'red' }}>
        *Please use the following test credit card for payments
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      <div className={classes.button}>
        <StripeCheckoutButton price={total} />
      </div>
    </>
  )
}

export default DesktopCheckoutView

//   <div className='total'>TOTAL: ${total}</div>
//   <div className='test-warning'>
//     *Please use the following test credit card for payments
//     <br />
//     4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
//   </div>
//   <StripeCheckoutButton price={total} />
// </div>
