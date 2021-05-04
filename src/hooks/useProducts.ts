import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../types'
import { getAllProducts } from '../redux/actions/product'

export default function useProducts() {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.products)

  const [err, setErr] = useState('')
  const [data, setData] = useState(Array)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  useEffect(() => {
    if (err) {
      setErr('error loading data')
    }
    setData(products)
  }, [products, err])

  return [data]
}
