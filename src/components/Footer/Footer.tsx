import React from 'react'
import Link from 'next/link'

import { Nav } from '../Nav/Nav'
import { Logo } from '../Logo/Logo'

import styles from './Footer.module.sass'


const img = require('../../common/images/icons/mail.png')


export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTitle}>
        <Nav scroll={0} />
        <Logo />
        <nav className={styles.mobNav}>
          <Link href='/'><a className={styles.item}>Услуги</a></Link>
          <Link href='portfolio'><a className={styles.item}>Портфолио</a></Link>
          <Link href='/'><a className={styles.item}>Как мы работаем</a></Link>
          <Link href='/'><a className={styles.item}>Технологии</a></Link>
          <Link href='/'><a className={styles.item}>Команда</a></Link>
          <Link href='/'><a className={styles.item}>Контакты</a></Link>
        </nav>
      </div>
      <div className={styles.footerUnderBlock}>
        <a
          href='mailto:hello@pcnp-studio.ru'
          className={styles.mail}
        >
          <img src={img} />
          hello@pcnp-studio.ru
        </a>
        <p className={styles.author}>
          © 2020, PCNP Studio, Все права защищены
        </p>
      </div>
    </footer>
  )
}
