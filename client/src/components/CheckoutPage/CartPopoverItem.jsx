import { Divider, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentCurrency } from '../../redux/products/products.selectors'
import { returnPriceWithCurrency } from '../../redux/products/products.utils'

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

const CartPopoverItem = (props) => {
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
        <Typography>{returnPriceWithCurrency(currency, price)}</Typography>
      </div>
      <Divider />
    </>
  )
}

export default CartPopoverItem
