import React from 'react'
import Link from 'next/link'

import styles from './Nav.module.sass'


export const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'><a>Услуги</a></Link>
      <Link href='/'><a>Портфолио</a></Link>
      <Link href='/'><a>Как мы работаем</a></Link>
      <Link href='/'><a>Технологии</a></Link>
      <Link href='/'><a>Команда</a></Link>
      <Link href='/'><a>Контакты</a></Link>
    </nav>
  )
}