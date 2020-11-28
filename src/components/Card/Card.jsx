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
  hr: {
    width: '90%',
    border: 'none',
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    height: 1,
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
      <hr className={classes.hr} />
      <PriceAndCart {...props} />
    </MuiCard>
  )
}

export default Card
