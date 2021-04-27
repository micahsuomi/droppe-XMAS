import React from 'react'
import classNames from 'classnames' 

import { ButtonProps } from '../../types'

import styles from './styles.module.scss'


export default function Button({
  color,
  size,
  className,
  withMargin = false,
  withIcon = false,
  icon,
  text
}: ButtonProps) {
  console.log(size)
  return (
    <button className={classNames(
      styles.button,
      className,
      {
        [styles.big_button]: size === 'lg',
        [styles.medium_button]: size === 'md',
        [styles.small_button]: size === 'sm',
        [styles.btn_primary]: color === 'primary',
        [styles.btn_secondary]: color === 'secondary',
        [styles.with_margin]: withMargin,
      }
    )}>
      <span>
        {text}
      </span>
      {
        withIcon && 
          <i className={icon}></i>
      }
    </button>
  )
}
