import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AppState, Cart } from '../types'

export default function useCheckoutCarts() {
  const [cartsDiscarded, setCartsDiscarded] = useState([] as Cart[])
  const [cartsApproved, setCartsApproved] = useState(Array)

  const disregardedCarts = useSelector(
    (state: AppState) => state.cart.disregardedCarts
  )
  console.log(disregardedCarts)
  const approvedCarts = useSelector(
    (state: AppState) => state.cart.approvedCarts
  )

  useEffect(() => {
    setCartsDiscarded(disregardedCarts)
    setCartsApproved(approvedCarts)
  }, [disregardedCarts, approvedCarts])

  return [cartsDiscarded, cartsApproved]
}
