import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Button, Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CartPopover from './CartPopover'
import CurrencySelector from './CurrencySelector'

const useStyles = makeStyles((theme) => ({
  Toolbar: {
    justifyContent: ' space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const [anchorElement, setAnchorElement] = useState(null)
  const handleClosePopover = () => {
    setAnchorElement(null)
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.Toolbar}>
        <Button color='inherit'>Home</Button>
        <CurrencySelector />
        <IconButton
          onClick={(e) => setAnchorElement(e.currentTarget)}
          edge='start'
          color='inherit'
          aria-label='menu'
        >
          <Badge badgeContent={1} color='secondary'>
            <ShoppingCartIcon fontSize='large' />
          </Badge>
        </IconButton>
        <CartPopover
          handleClosePopover={handleClosePopover}
          anchorElement={anchorElement}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
