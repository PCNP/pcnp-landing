import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './Button.module.sass'


type OwnProps = {
  href?: string
  onClick?: () => void
  btnType?: 'primary' | 'outline'
  children: React.ReactNode
}


export const Button: React.FC<OwnProps> = ({ href, onClick, children, btnType = 'primary' }) => {
  if (!href) {
    return (
      <button
        onClick={onClick}
        className={
          cn(
            styles.button,
            btnType === 'outline' && styles.outline
          )
        }
      >
        { children }
      </button>
    )
  }

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        className={
          cn(
            styles.button,
            btnType === 'outline' && styles.outline
          )
        }
      >
        { children }
      </a>
    )
  }
  return (
    <Link href={href}>
      <a
        className={
          cn(
            styles.button,
            btnType === 'outline' && styles.outline
          )
        }
      >
        { children }
      </a>
    </Link>
  )
}