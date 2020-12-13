import clsx from 'clsx'

import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { sortName, sortPrice } from '../../../redux/products/products.actions'

const useStyles = makeStyles({
  listItemInitial: { color: 'rgba(0, 0, 0, 0.42)' },
  listItemClicked: { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
  iconInitial: { transition: '1s' },
  iconRotate: { transform: 'rotate(180deg)' },
})

const DrawerSorting = () => {
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

  const classes = useStyles()
  return (
    <>
      <ListItem
        className={
          priceSortState === null
            ? classes.listItemInitial
            : classes.listItemClicked
        }
        onClick={handlePriceClick}
        button
        key='Sort by Price'
      >
        <ListItemIcon>
          <ArrowUpwardIcon
            color={priceSortState === null ? 'disabled' : 'inherit'}
            className={clsx(classes.iconInitial, {
              [classes.iconRotate]: priceSortState === 'Desc',
            })}
          />
        </ListItemIcon>
        <ListItemText primary='Sort by Price' />
      </ListItem>
      <ListItem
        className={
          nameSortState === null
            ? classes.listItemInitial
            : classes.listItemClicked
        }
        onClick={handleNameClick}
        button
        key='Sort by Name'
      >
        <ListItemIcon>
          <ArrowUpwardIcon
            color={nameSortState === null ? 'disabled' : 'inherit'}
            className={clsx(classes.iconInitial, {
              [classes.iconRotate]: nameSortState === 'Desc',
            })}
          />
        </ListItemIcon>
        <ListItemText primary='Sort by Name' />
      </ListItem>
    </>
  )
}

export default DrawerSorting
