import React, { useState } from 'react'

import Image from '../Image'
import Button from '../Button'
import useTotal from '../../hooks/useTotal'
import { ProductItemProps } from '../../types'

import './style.scss'

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
  checkout = false,
  totalPrice,
  totalDiscount  
}: ProductItemProps) {
  // const [total, totalDiscount] = useTotal(totalPrice, quantity)
  const [viewMore, setViewMore] = useState(false)
  const viewOnClick = () => {
    setViewMore(!viewMore)
  }
  console.log(totalDiscount)
  return (
    <div className="product">
      <Image image={image} title={title} />{' '}
      <ul>
        <li>{title} </li>
        <li>Price: €{price} </li>
        {viewMore && (
          <>
            <li>Category: {category}</li>
            <li>Description: {description}</li>
          </>
        )}
        {!checkout && (
          <li>
            {viewMore ? (
              <Button
                onClickRes={viewOnClick}
                size="sm"
                text="View Less"
                color="secondary"
                noBackgroundColor
              />
            ) : (
              <Button
                onClickRes={viewOnClick}
                size="sm"
                text="View More"
                color="primary"
                noBackgroundColor
              />
            )}
          </li>
        )}

        <li>Qty: {quantity}</li>
        <li>Total: €{totalPrice}</li>
        <li>Discount: {totalDiscount}</li>
        {!checkout && (
          <Button
            onClickRes={() => dismissOnClick(product)}
            size="sm"
            text="Discard"
            backgroundColor="secondary"
          />
        )}
      </ul>
      <hr></hr>
    </div>
  )
}
