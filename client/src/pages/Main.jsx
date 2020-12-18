import { CircularProgress, Grid, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useRef, useState, useCallback } from 'react'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import useProductsRequest from '../customHooks/useProductsRequest'

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
    marginTop: '50px',
  },
})

const Main = () => {
  const theme = useTheme()

  let limit = 15

  const classes = useStyles()
  const [skip, setSkip] = useState(0)
  const { productsLoading, products, hasMore } = useProductsRequest(skip, limit)
  const observer = useRef()

  const gettingProductsTrigger = useCallback(
    (node) => {
      if (productsLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setSkip((prevSkip) => prevSkip + limit)
          }
        },
        { threshold: 1 }
      )
      if (node) observer.current.observe(node)
    },
    [productsLoading, hasMore, limit]
  )
  // useEffect(() => {}, [dispatch, skip, limit])
  return (
    <>
      <Header />

      <Grid container className={classes.gridContainer} spacing={3}>
        {products.map((item, index) => {
          if (products.length === index + 1) {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card
                  gettingProductsTrigger={gettingProductsTrigger}
                  {...item}
                />
              </Grid>
            )
          } else {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card {...item} />
              </Grid>
            )
          }
        })}

        {productsLoading && (
          <Grid item xs={12} lg={12}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default Main
