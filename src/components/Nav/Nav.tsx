import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './Nav.module.sass'


type OwnProps = {
  scroll: number
  nav: string[]
}


export const Nav: React.FC<OwnProps> = ({ scroll, nav }) => {
  return (
    <nav
      className={
        cn(
          styles.nav,
          scroll > 0 ? styles.scrollNav : ''
        )
      }
    >
      <Link href='/'><a className={styles.item}>{ nav[0] }</a></Link>
      <Link href='/portfolio'><a className={styles.item}>{ nav[1] }</a></Link>
      <Link href='/'><a className={styles.item}>{ nav[2] }</a></Link>
      <Link href='/'><a className={styles.item}>{ nav[3] }</a></Link>
      <Link href='/'><a className={styles.item}>{ nav[4] }</a></Link>
      <Link href='/'><a className={styles.item}>{ nav[5] }</a></Link>
    </nav>
  )
}