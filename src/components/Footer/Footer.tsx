import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import { Nav } from '../Nav/Nav'
import { Logo } from '../Logo/Logo'

import styles from './Footer.module.sass'


const img = require('../../common/images/icons/mail.png')


type OwnProps = {
  nav: string[]
}


const navigation = [
  'Услуги',
  'Портфолио',
  'Как мы работаем',
  'Наши технологии',
  'Контакты',
]


export const Footer: React.FC<OwnProps> = ({ nav = navigation }) => {
  const router = useRouter()
  const pref = router.asPath.split('/')[1] === 'en' ? '/en' : ''

  return (
    <footer className={
      cn(
        styles.footer,
      )
    }
    >
      <div className={styles.footerTitle}>
        <Nav
          scroll={0}
          nav={nav}
        />
        <Logo />
        <nav className={styles.mobNav}>
          <Link href={pref + '/#services'}><a className={styles.item}>{ nav[0] }</a></Link>
          <Link href={pref + '/portfolio'}><a className={styles.item}>{ nav[1] }</a></Link>
          <Link href={pref + '/#workflow'}><a className={styles.item}>{ nav[2] }</a></Link>
          <Link href={pref + '/#technologies'}><a className={styles.item}>{ nav[3] }</a></Link>
          <Link href={pref + '/#contacts'}><a className={styles.item}>{ nav[4] }</a></Link>
        </nav>
      </div>
      <div className={styles.footerUnderBlock}>
        <a
          href='mailto:hello@pcnp-studio.ru'
          className={styles.mail}
        >
          <img
            src={img}
            alt='email'
          />
          hello@pcnp-studio.ru
        </a>
        <p className={styles.author}>
          © 2020 -
          { ' ' }
          { new Date().getFullYear() }
          , PCNP Studio, Все права защищены
        </p>
      </div>
    </footer>
  )
}
