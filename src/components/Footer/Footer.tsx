import React from 'react'
import Link from 'next/link'

import { Nav } from '../Nav/Nav'
import { Logo } from '../Logo/Logo'

import styles from './Footer.module.sass'


const img = require('../../common/images/icons/mail.png')


type OwnProps = {
  nav: string[]
}


export const Footer: React.FC<OwnProps> = ({ nav }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTitle}>
        <Nav
          scroll={0}
          nav={nav}
        />
        <Logo />
        <nav className={styles.mobNav}>
          <Link href='/'><a className={styles.item}>{ nav[0] }</a></Link>
          <Link href='/portfolio'><a className={styles.item}>{ nav[1] }</a></Link>
          <Link href='/'><a className={styles.item}>{ nav[2] }</a></Link>
          <Link href='/'><a className={styles.item}>{ nav[3] }</a></Link>
          <Link href='/'><a className={styles.item}>{ nav[4] }</a></Link>
          <Link href='/'><a className={styles.item}>{ nav[5] }</a></Link>
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
