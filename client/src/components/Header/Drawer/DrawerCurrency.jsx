import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EuroIcon from '@material-ui/icons/Euro'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrency } from '../../../redux/products/products.actions'
import CadIcon from '../../../icons/canadian-dollar.svg'
import './cadIcon.css'
import { selectCurrentCurrency } from '../../../redux/products/products.selectors'

const useStyles = makeStyles({
  listItemUnchecked: { color: 'rgba(0, 0, 0, 0.42)' },
  listItemChecked: { backgroundColor: 'rgba(0, 0, 0, 0.08)' },
})

const DrawerCurrency = () => {
  const dispatch = useDispatch()
  const currencyState = useSelector(selectCurrentCurrency)
  const classes = useStyles()

  return (
    <>
      <ListItem
        className={
          currencyState === 'USD'
            ? classes.listItemChecked
            : classes.listItemUnchecked
        }
        onClick={(e) => dispatch(changeCurrency(e.target.innerText))}
        button
        key='USD'
      >
        <ListItemIcon>
          <AttachMoneyIcon
            color={currencyState === 'USD' ? 'inherit' : 'disabled'}
          />
        </ListItemIcon>
        <ListItemText primary='USD' />
      </ListItem>
      <ListItem
        className={
          currencyState === 'EUR'
            ? classes.listItemChecked
            : classes.listItemUnchecked
        }
        onClick={(e) => dispatch(changeCurrency(e.target.innerText))}
        button
        key='EUR'
      >
        <ListItemIcon>
          <EuroIcon color={currencyState === 'EUR' ? 'inherit' : 'disabled'} />
        </ListItemIcon>
        <ListItemText primary='EUR' />
      </ListItem>
      <ListItem
        className={
          currencyState === 'CAD'
            ? classes.listItemChecked
            : classes.listItemUnchecked
        }
        onClick={(e) => dispatch(changeCurrency(e.target.innerText))}
        button
        key='CAD'
      >
        <ListItemIcon
          style={
            currencyState === 'CAD' ? { opacity: 0.54 } : { opacity: 0.26 }
          }
        >
          <img className='cad-icon' src={CadIcon} alt='' />
        </ListItemIcon>
        <ListItemText primary='CAD' />
      </ListItem>
    </>
  )
}

export default DrawerCurrency
