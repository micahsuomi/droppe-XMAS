import React, { useState, useEffect, useCallback } from 'react'

export default function UseTotal(price: any, quantity: number) {
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState('None')

  const calculateTotal = useCallback(() => {
    const totalPrice = parseInt(price) * quantity
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
      // console.log('this product has discount', title, price, quantity)
      // console.log((parseInt(price) * quantity) - (parseInt(price) * 0.4))
      setDiscount('-50%')
      return totalPrice - totalPrice * 0.5
    }
    return totalPrice
  }, [price, quantity])

  useEffect(() => {
    const locadTotals = calculateTotal()
    setTotal(locadTotals)
  }, [calculateTotal])

  return [total, discount]
}
