import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Popover as PopoverMUI, Typography } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}))

const CartPopover = (props) => {
  const { anchorElement, handleClosePopover } = props
  const classes = useStyles()

  const open = Boolean(anchorElement)
  const id = open ? 'popover' : undefined

  return (
    <PopoverMUI
      id={id}
      open={open}
      anchorEl={anchorElement}
      onClose={handleClosePopover}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Typography className={classes.typography}>
        The content of the Popover.
      </Typography>
    </PopoverMUI>
  )
}

export default CartPopover
