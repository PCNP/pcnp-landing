import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './Nav.module.sass'


type OwnProps = {
  scroll: number
}

export const Nav: React.FC<OwnProps> = ({ scroll }) => {
  return (
    <nav
      className={
        cn(
          styles.nav,
          scroll > 0 ? styles.scrollNav : ''
        )
      }
    >
      <Link href='/'><a className={styles.item}>Услуги</a></Link>
      <Link href='/portfolio'><a className={styles.item}>Портфолио</a></Link>
      <Link href='/'><a className={styles.item}>Как мы работаем</a></Link>
      <Link href='/'><a className={styles.item}>Технологии</a></Link>
      <Link href='/'><a className={styles.item}>Команда</a></Link>
      <Link href='/'><a className={styles.item}>Контакты</a></Link>
    </nav>
  )
}