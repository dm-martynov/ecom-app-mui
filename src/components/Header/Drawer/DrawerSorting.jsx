import React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  iconHidden: {
    visibility: 'hidden',
  },
})

const DrawerSorting = () => {
  const classes = useStyles()

  return (
    <ListItem button key='Sort by Price'>
      <ListItemIcon>
        <ArrowDownwardIcon className={classes.iconHidden} />
      </ListItemIcon>
      <ListItemText primary='Sort by Price' />
    </ListItem>
  )
}

export default DrawerSorting
