import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsStart } from '../redux/products/products.actions'
import {
  selectAndFilterProductsByPriceAsc,
  selectAndFilterProductsByPriceDesc,
  selectAndFilterProductsByTitleAsc,
  selectAndFilterProductsByTitleDesc,
} from '../redux/products/products.selectors'

const useProductsRequest = (skip, limit) => {
  const sortingPriceStatus = useSelector(
    (state) => state.products.sorting.price
  )

  const sortingNameStatus = useSelector((state) => state.products.sorting.name)

  let products = useSelector((state) => state.products.productsArr)

  const sortedProductsByPriceAsc = useSelector(
    selectAndFilterProductsByPriceAsc
  )
  const sortedProductsByPriceDesc = useSelector(
    selectAndFilterProductsByPriceDesc
  )

  const sortedProductsByNameAsc = useSelector(selectAndFilterProductsByTitleAsc)
  const sortedProductsByNameDesc = useSelector(
    selectAndFilterProductsByTitleDesc
  )

  const productsLoading = useSelector((state) => state.products.productsLoading)
  const hasMore = useSelector((state) => state.products.hasMore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsStart({ skip, limit }))
  }, [skip, limit, dispatch])

  if (sortingPriceStatus === 'Asc') products = sortedProductsByPriceAsc
  if (sortingPriceStatus === 'Desc') products = sortedProductsByPriceDesc
  if (sortingNameStatus === 'Asc') products = sortedProductsByNameAsc
  if (sortingNameStatus === 'Desc') products = sortedProductsByNameDesc

  return {
    productsLoading,
    products,
    hasMore,
  }
}

export default useProductsRequest
