import React from 'react'

import Image from '../Image'
import useTotal from '../../hooks/useTotal'
import { ProductItemProps } from '../../types'

export default function ProductItem({
  image,
  title,
  price,
  category,
  description,
  quantity
}: ProductItemProps) {
  const [total, totalDiscount] = useTotal(price, quantity)
  return (
    <div>
      <Image image={image} title={title} />{' '}
      <ul>
        <li>{title} </li>
        <li>Price: €{price} </li>
        <li>Category: {category}</li>
        <li>Description: {description}</li>
        <li>Qty: {quantity}</li>
        <li>Total: €{total}</li>
        <li>Discount: {totalDiscount}</li>
      </ul>
    </div>
  )
}
