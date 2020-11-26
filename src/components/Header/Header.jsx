import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, useMediaQuery } from '@material-ui/core'

import CurrencySelector from './CurrencySelector'
import CartIconComponent from './CartIconComponent/CartIconComponent'

const useStyles = makeStyles((theme) => ({
  Toolbar: {
    alignContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const Header = () => {
  const classes = useStyles()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar position='static'>
      <Toolbar className={classes.Toolbar}>
        {isMobile ? (
          <>
            <div style={{ flexGrow: 1 }}></div>
            <CartIconComponent />
          </>
        ) : (
          <>
            <Button color='inherit'>Home</Button>
            <div style={{ flexGrow: 1 }}></div>
            <CurrencySelector />
            <CartIconComponent />
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
