import { CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import { isMobile } from 'react-device-detect'
import { getProductsStart } from '../redux/products/products.actions'

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
})

const Main = () => {
  const classes = useStyles()
  const products = useSelector((state) => state.products.productsArr)
  const dispatch = useDispatch()
  let limit = 30
  let skip = 0
  if (isMobile) limit = 5

  useEffect(() => {
    dispatch(getProductsStart({ skip, limit }))
    console.log('dispatched')
  }, [])
  return (
    <>
      <Header />

      <Grid container className={classes.gridContainer} spacing={3}>
        {products ? (
          products.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={2}>
              <Card {...item} />
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </>
  )
}

export default Main
