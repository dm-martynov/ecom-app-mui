import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import data from '../data'
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
  useEffect(() => {
    if (!products) dispatch(getProductsStart())
  }, [products, dispatch])
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
