import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { InputBase } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrency } from '../../redux/products/products.actions'
import { selectCurrentCurrency } from '../../redux/products/products.selectors'

const useStyles = makeStyles((theme) => ({
  select: {
    background: theme.palette.background.paper,
    borderRadius: 4,
    border: '1px solid #ced4da',
  },
}))
const BootstrapInput = withStyles({
  input: {
    position: 'relative',

    fontSize: 16,
    padding: '8px 20px 8px 10px',
  },
})(InputBase)
const CurrencySelector = () => {
  const dispatch = useDispatch()
  const currencyState = useSelector(selectCurrentCurrency)
  const classes = useStyles()
  const handleCurrencyChange = (event) => {
    dispatch(changeCurrency(event.target.value))
  }
  return (
    <FormControl style={{ marginRight: 40 }}>
      <Select
        className={classes.select}
        defaultValue={currencyState}
        value={currencyState}
        onChange={handleCurrencyChange}
        input={<BootstrapInput />}
      >
        <MenuItem value='USD'>USD</MenuItem>
        <MenuItem value='EUR'>EUR</MenuItem>
        <MenuItem value='CAD'>CAD</MenuItem>
      </Select>
    </FormControl>
  )
}
export default CurrencySelector
