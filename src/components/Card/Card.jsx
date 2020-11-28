import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card as MuiCard,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core/'
import PriceAndCart from './PriceAndCart'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 140,
    width: 240,
  },
  title: {
    fontSize: 14,
  },
  buttonsDiv: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    paddingLeft: 17,
  },
  addRemoveDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemsAmount: {
    paddingLeft: 4,
    paddingRight: 4,
  },
})

const Card = (props) => {
  const { description, id, image, price, title } = props
  const classes = useStyles()

  return (
    <MuiCard className={classes.root}>
      <CardContent>
        <CardMedia
          component='img'
          className={classes.media}
          image={image}
          title='Paella dish'
        />
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description}
        </Typography>
      </CardContent>
      <PriceAndCart {...props} />
    </MuiCard>
  )
}

export default Card
