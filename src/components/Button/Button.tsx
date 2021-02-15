import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './Button.module.sass'


type PrimaryButtonPropsType = {
    href?: string
    onClick?: () => void
    btnType?: 'primary' | 'outline'
    children: React.ReactNode
}


export const Button: React.FC<PrimaryButtonPropsType> = ({ href, onClick, children, btnType = 'primary' }) => {
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
        href='href'
        className={styles.link}
      >
        { children }
      </a>
    )
  }

  return (
    <Link href='href'>
      <a className={styles.link}>
        { children }
      </a>
    </Link>
  )
}