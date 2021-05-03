import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function useWishListCart() {
  const [data, setData] = useState(Array)
  const [dataApproved, setDataApproved] = useState(Array)

  const disregardedCarts = useSelector(
    (state: AppState) => state.cart.disregardedCarts
  )
  const approvedCarts = useSelector(
    (state: AppState) => state.cart.approvedCarts
  )

  useEffect(() => {
    setData(disregardedCarts)
    setDataApproved(approvedCarts)
  }, [disregardedCarts, approvedCarts])

  return [data, dataApproved]
}
