import React, { useState, useEffect, useCallback } from 'react'

export default function UseTotal(totalPrice:any, quantity: number) {
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState('None')
  const calculateTotalProducts = useCallback(() => {
    if (quantity > 1 && quantity <= 3) {
      setDiscount('-20%')
      return totalPrice - totalPrice * 0.2
    }
    if (quantity === 3 && quantity < 4) {
      setDiscount('-30%')
      return totalPrice - totalPrice * 0.3
    }
    if (quantity === 4 && quantity < 5) {
      setDiscount('-40%')
      return totalPrice - totalPrice * 0.4
    }
    if (quantity > 4) {
      setDiscount('-50%')
      return totalPrice - totalPrice * 0.5
    }
    return totalPrice
  }, [totalPrice, quantity])

  useEffect(() => {
    const loadTotals = calculateTotalProducts()
    setTotal(loadTotals)
  }, [calculateTotalProducts])

  return [total, discount]
}
