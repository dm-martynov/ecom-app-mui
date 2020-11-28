import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import data from '../data'

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
})

const Main = () => {
  const classes = useStyles()
  return (
    <>
      <Header />

      <Grid container className={classes.gridContainer} spacing={3}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={2}>
            <Card {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Main
