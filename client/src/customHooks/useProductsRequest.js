import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsStart } from '../redux/products/products.actions'

const useProductsRequest = (skip, limit) => {
  const products = useSelector((state) => state.products.productsArr)
  const productsLoading = useSelector((state) => state.products.productsLoading)
  const hasMore = useSelector((state) => state.products.hasMore)
  const dispatch = useDispatch()
  console.log(productsLoading)

  //////////////

  //  useEffect(() => {
  //   //  СМЕНА ВАЛЮТЫ ИЛИ СОРТИРОВКА
  // DISPATCH(clearProductsArr)
  //  }, [skip, limit, dispatch])

  ////////

  useEffect(() => {
    dispatch(getProductsStart({ skip, limit }))
  }, [skip, limit, dispatch])

  return { productsLoading, products, hasMore }
}

export default useProductsRequest
