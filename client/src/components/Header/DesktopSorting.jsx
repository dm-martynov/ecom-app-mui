import { Button, ButtonGroup, makeStyles } from '@material-ui/core'
import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { useDispatch, useSelector } from 'react-redux'
import { sortName, sortPrice } from '../../redux/products/products.actions'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  listItemInitial: { color: 'rgba(0, 0, 0, 0.42)' },
  listItemClicked: { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
  arrowDisabled: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  iconInitial: {
    transition: '0.7s',
  },
  buttonDisabled: {
    color: 'rgba(0, 0, 0, 0.65)',
  },
  buttonEnabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  iconRotate: { transform: 'rotate(180deg)' },
}))

const DesktopSorting = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const priceSortState = useSelector((state) => state.products.sorting.price)
  const nameSortState = useSelector((state) => state.products.sorting.name)

  const handlePriceClick = () => {
    if (priceSortState === null) {
      dispatch(sortPrice('Asc'))
    } else if (priceSortState === 'Asc') {
      dispatch(sortPrice('Desc'))
    } else if (priceSortState === 'Desc') {
      dispatch(sortPrice(null))
    }
  }

  const handleNameClick = () => {
    if (nameSortState === null) {
      dispatch(sortName('Asc'))
    } else if (nameSortState === 'Asc') {
      dispatch(sortName('Desc'))
    } else if (nameSortState === 'Desc') {
      dispatch(sortName(null))
    }
  }

  return (
    <div className={classes.root}>
      <ButtonGroup variant='text' color='inherit' size='large'>
        <Button
          className={
            priceSortState === null
              ? classes.buttonDisabled
              : classes.buttonEnabled
          }
          onClick={handlePriceClick}
          startIcon={
            <ArrowUpwardIcon
              classes={{
                colorDisabled: classes.arrowDisabled,
              }}
              color={priceSortState === null ? 'disabled' : 'inherit'}
              className={clsx(classes.iconInitial, {
                [classes.iconRotate]: priceSortState === 'Desc',
              })}
            />
          }
        >
          Sort by Price
        </Button>
        <Button
          className={
            nameSortState === null
              ? classes.buttonDisabled
              : classes.buttonEnabled
          }
          onClick={handleNameClick}
          endIcon={
            <ArrowUpwardIcon
              classes={{
                colorDisabled: classes.arrowDisabled,
              }}
              color={nameSortState === null ? 'disabled' : 'inherit'}
              className={clsx(classes.iconInitial, {
                [classes.iconRotate]: nameSortState === 'Desc',
              })}
            />
          }
        >
          Sort by Name
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default DesktopSorting
