import React, { useState } from 'react'

import Image from '../Image'
import Button from '../Button'
import { ProductItemProps } from '../../types'
import { iconsLocale } from '../../utils/locale/icons'

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
  discardItemOnClick,
  checkout = false,
  totalPrice,
  totalDiscount,
}: ProductItemProps) {
  const [viewMore, setViewMore] = useState(false)
  const viewOnClick = () => {
    setViewMore(!viewMore)
  }
  return (
    <div className="product">
      {totalDiscount !== 'None' && (
        <i className={iconsLocale.discount.iconClass} style={{position: 'absolute',
          top: '6%',
          left: '1%',
          color: '#ea2828',
          fontSize: '4em',
          opacity: '.5'}}></i>
      )}
      <div>
        <Image image={image} title={title} />{' '}
      </div>
      <div className="product__header">
        <ul>
          <li>
            <span>{title}</span>
          </li>
          <li>
            <span>Price:</span> €{price}{' '}
          </li>
          {viewMore && (
            <>
              <li>
                <span>Category:</span> {category}
              </li>
              <li>
                <span>Description:</span> {description}
              </li>
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
        </ul>
        <ul className="product__body">
          <li>
            <span>Qty:</span> {quantity}
          </li>
          <li>
            <span>Total:</span> €{totalPrice}
          </li>
          <li>
            {totalDiscount !== 'None' ? (
              <span style={{ color: 'red' }}> {totalDiscount} OFF </span>
            ) : (
              ''
            )}
          </li>
          {!checkout && (
            <Button
              onClickRes={() => discardItemOnClick(product)}
              size="sm"
              text="Discard"
              noBackgroundColor
              color="secondary"
            />
          )}
        </ul>
      </div>
      <hr></hr>
    </div>
  )
}

export const discountStyle = {
  position: 'absolute',
  top: '6%',
  left: '1%',
  color: '#ea2828',
  fontSize: '4em',
  opacity: '.5'
}
