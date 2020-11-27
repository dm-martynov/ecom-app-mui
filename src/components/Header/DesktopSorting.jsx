import { Button, ButtonGroup, makeStyles } from '@material-ui/core'
import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const DesktopSorting = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ButtonGroup variant='text' color='inherit' size='large'>
        <Button startIcon={<ArrowUpwardIcon />}>Sort by Price</Button>
        <Button endIcon={<ArrowUpwardIcon />}>Sort by Name</Button>
      </ButtonGroup>
    </div>
  )
}

export default DesktopSorting
