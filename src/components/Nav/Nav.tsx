import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './Nav.module.sass'


type OwnProps = {
  scroll: number
  nav: string[]
}

const navigation = [
  'Услуги',
  'Портфолио',
  'Как мы работаем',
  'Наши технологии',
  'Наша команда',
  'Контакты',
]


export const Nav: React.FC<OwnProps> = ({ scroll, nav = navigation }) => {
  const router = useRouter()
  const pref = router.asPath.split('/')[1] === 'en' ? '/en' : ''

  return (
    <nav
      className={
        cn(
          styles.nav,
          scroll > 0 ? styles.scrollNav : ''
        )
      }
    >
      <Link href={pref + '/'}><a className={styles.item}>{ nav[0] }</a></Link>
      <Link href={pref + '/portfolio'}><a className={styles.item}>{ nav[1] }</a></Link>
      <Link href={pref + '/'}><a className={styles.item}>{ nav[2] }</a></Link>
      <Link href={pref + '/'}><a className={styles.item}>{ nav[3] }</a></Link>
      <Link href={pref + '/'}><a className={styles.item}>{ nav[4] }</a></Link>
      <Link href={pref + '/'}><a className={styles.item}>{ nav[5] }</a></Link>
    </nav>
  )
}