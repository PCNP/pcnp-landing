import React from 'react'

import { Nav } from '../Nav/Nav'
import { Logo } from '../Logo/Logo'

import styles from './Footer.module.sass'


const img = require('../../common/images/icons/mail.png')


export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Nav />
        <Logo />
      </div>
      <div>
        <div className={styles.mail}>
          <img src={img} />
          hello@pcnp-studio.ru
        </div>
        <p>
          © 2020, PCNP Studio, Все права защищены
        </p>
      </div>
    </footer>
  )
}
