import Link from 'next/link'
import cn from 'classnames'
import React from 'react'

import styles from './HeaderButton.module.sass'


type OwnProps = {
  href: string
}


export const Button: React.FC<OwnProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        className={
          cn(
            styles.button,
          )
        }
      >
        { children }
      </a>
    </Link>
  )
}