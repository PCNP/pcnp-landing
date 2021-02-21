import React from 'react'

import { Nav } from '../Nav/Nav'
import { Logo } from '../Logo/Logo'

import styles from './Footer.module.sass'


const img = require('../../common/images/icons/mail.png')


export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTitle}>
        <Nav scroll={5} />
        <Logo />
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
