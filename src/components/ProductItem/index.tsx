import React, { useState } from 'react'

import Image from '../Image'
import useTotal from '../../hooks/useTotal'
import { ProductItemProps } from '../../types'

export default function ProductItem({
  id,
  product,
  image,
  title,
  price,
  category,
  description,
  quantity,
  dismissOnClick,
}: ProductItemProps) {
  const [total, totalDiscount] = useTotal(price, quantity)
  const [viewMore, setViewMore] = useState(false)

  const viewOnClick = () => {
    setViewMore(!viewMore)
  }
  return (
    <div>
      <Image image={image} title={title} />{' '}
      <ul>
        <li>{title} </li>
        <li>Price: €{price} </li>
        {
          viewMore &&
          <>
            <li>Category: {category}</li>
            <li>Description: {description}</li>
          </>
        }
       
        <li>
          {viewMore ? (
            <button onClick={viewOnClick}>View Less</button>
          ) : (
            <button onClick={viewOnClick}>View More</button>
          )}
        </li>
        <li>Qty: {quantity}</li>
        <li>Total: €{total}</li>
        <li>Discount: {totalDiscount}</li>
        <button>Approve</button>
        <button onClick={() => dismissOnClick(product)}>Discard</button>
      </ul>
    </div>
  )
}
