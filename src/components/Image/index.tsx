import React from 'react'

import { ImageProps } from '../../types'

import './style.scss'

export default function Image({ image, title }: ImageProps) {
  return (
    <div className="image">
      <img src={image} alt={title} />
    </div>
  )
}
