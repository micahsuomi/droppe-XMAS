import { useState, useEffect } from 'react'
import {useSelector,  useDispatch } from 'react-redux'

import { AppState } from '../types'
import { getAllCarts, getAllCartsDismissed } from '../redux/actions/cart'

export default function useCarts() {
  const dispatch = useDispatch()
  const carts = useSelector((state: AppState) => state.cart.carts)
  const disregardedCarts = useSelector(
    (state: AppState) => state.cart.disregardedCarts
  )
  const [err, setErr] = useState('')
  const [data, setData] = useState(Array)
  // const [dataDisregarded, setDataDisregarded] = useState(Array)


  useEffect(() => {
    dispatch(getAllCarts())
    dispatch(getAllCartsDismissed())
  }, [dispatch])


  useEffect(() => {
    if(err) {
      setErr('error loading data')
    }
    setData(carts)
    // setDataDisregarded(disregardedCarts)
  }, [carts, disregardedCarts, err])

  return [data]
}
