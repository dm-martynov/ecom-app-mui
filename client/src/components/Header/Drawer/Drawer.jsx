import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Drawer as DrawerMui, ListItemIcon } from '@material-ui/core/'
import { useHistory } from 'react-router-dom'

import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import HomeIcon from '@material-ui/icons/Home'
import ListItemText from '@material-ui/core/ListItemText'
import { IconButton } from '@material-ui/core'
import DrawerSorting from './DrawerSorting'
import DrawerCurrency from './DrawerCurrency'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 3,
    paddingRight: 10,
    width: 200,
  },
})

const Drawer = () => {
  const classes = useStyles()
  const [state, setState] = useState(false)
  let history = useHistory()

  return (
    <div>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={() => setState(true)}
        edge='start'
      >
        <MenuIcon />
      </IconButton>

      <DrawerMui open={state} onClose={() => setState(false)}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setState(false)}>
            <ChevronLeftIcon fontSize='large' />
          </IconButton>
        </div>
        <Divider />
        <ListItem onClick={() => history.push('/')} button key='Home'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <Divider />
        <DrawerSorting />
        <Divider />
        <DrawerCurrency />
        <Divider />
      </DrawerMui>
    </div>
  )
}

export default Drawer
