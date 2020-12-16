import { Divider, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentCurrency } from '../../redux/products/products.selectors'

const useStyles = makeStyles({
  itemContainer: {
    display: 'flex',
    padding: 12,
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
})

const CartItem = (props) => {
  const { image, quantity, title, price } = props.item

  const classes = useStyles()
  const currency = useSelector(selectCurrentCurrency)

  return (
    <>
      <div className={classes.itemContainer}>
        <div>
          <img alt='' src={image} style={{ width: 85 }} />
        </div>
        <div className={classes.titleAndQuantity}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography>{`${quantity} pcs.`}</Typography>
        </div>
        <Typography>
          {currency === 'USD'
            ? ` $${price.USD}`
            : currency === 'CAD'
            ? `CAN$${price.CAD}`
            : currency === 'EUR'
            ? ` €${price.EUR}`
            : ` $${price.USD}`}
        </Typography>
      </div>
      <Divider />
    </>
  )
}

export default CartItem
