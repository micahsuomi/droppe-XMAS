import React from 'react'
import classNames from 'classnames'

import { ButtonProps } from '../../types'

import styles from './styles.module.scss'

export default function Button({
  backgroundColor,
  color,
  size,
  className,
  withMargin = false,
  withIcon = false,
  outlined,
  noBackgroundColor,
  icon,
  text,
  onClickRes,
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.big_button]: size === 'lg',
        [styles.medium_button]: size === 'md',
        [styles.small_button]: size === 'sm',
        [styles.background_primary]: backgroundColor === 'primary',
        [styles.background_secondary]: backgroundColor === 'secondary',
        [styles.color_primary]: color === 'primary',
        [styles.color_secondary]: color === 'secondary',
        [styles.btn_no_border]: outlined,
        [styles.btn_no_backgroundcolor]: noBackgroundColor,
        [styles.with_margin]: withMargin,
      })}
      onClick={onClickRes}
      title={text}
    >
      <span>{text}</span>
      {withIcon && <i className={icon}></i>}
    </button>
  )
}
