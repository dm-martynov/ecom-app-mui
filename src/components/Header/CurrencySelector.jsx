import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { InputBase } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  select: {
    background: theme.palette.background.paper,
    borderRadius: 4,
    border: '1px solid #ced4da',
  },
}))
const BootstrapInput = withStyles((theme) => ({
  input: {
    position: 'relative',

    fontSize: 16,
    padding: '8px 20px 8px 10px',
  },
}))(InputBase)
const CurrencySelector = () => {
  const [currency, setCurrency] = useState('USD')

  const classes = useStyles()
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value)
  }
  return (
    <FormControl style={{ marginRight: 40 }}>
      <Select
        className={classes.select}
        defaultValue='USD'
        value={currency}
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
