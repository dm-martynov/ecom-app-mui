import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card as MuiCard,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
} from '@material-ui/core/'
import PriceAndCart from './PriceAndCart'
import { withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderWidth: 2,
    borderColor: 'black',
  },
  media: {
    height: 200,
    width: 260,
    margin: 'auto',
  },
  titleInitial: {
    lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
  },
  titleClicked: { lineHeight: '1.5em', minHeight: '3em' },
  hr: {
    width: '90%',
    border: 'none',
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    height: 1,
  },
  buttonsContainer: {
    alignSelf: 'flex-end',
    width: '100%',
    paddingTop: 7,
  },
  descriptionInitial: {
    lineHeight: '1.5em',
    height: '9em',
    overflow: 'hidden',
  },
  descriptionClicked: { lineHeight: '1.5em', minHeight: '9em' },
})

const styles = {
  cardContent: {
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}
const Card = (props) => {
  const { description, image, title, gettingProductsTrigger } = props
  const classes = useStyles()
  const [state, setState] = React.useState(false)
  const [isRisen, setRaised] = React.useState(false)
  const handleClick = () => {
    setState(!state)
  }
  return (
    <MuiCard
      onMouseOver={() => setRaised(true)}
      onMouseOut={() => setRaised(false)}
      raised={isRisen}
      className={classes.root}
    >
      <CardContent className={props.classes.cardContent}>
        <CardActionArea onClick={handleClick}>
          <CardMedia component='img' className={classes.media} image={image} />
          <Typography
            className={!state ? classes.titleInitial : classes.titleClicked}
            display='block'
            gutterBottom
            variant='h5'
            component='h2'
          >
            {title}
          </Typography>
          <Typography
            className={
              !state ? classes.descriptionInitial : classes.descriptionClicked
            }
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {description}
          </Typography>
        </CardActionArea>
        <div ref={gettingProductsTrigger} className={classes.buttonsContainer}>
          <hr className={classes.hr} />
          <PriceAndCart {...props} />
        </div>
      </CardContent>
    </MuiCard>
  )
}

export default withStyles(styles)(Card)
