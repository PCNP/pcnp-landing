import React, { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './Nav.module.sass'


type OwnProps = {
  scroll: number
  nav: string[]
  position?: {
    services: any
  }
}

const navigation = [
  'Услуги',
  'Портфолио',
  'Как мы работаем',
  'Наши технологии',
  'Контакты',
]


export const Nav: React.FC<OwnProps> = ({ scroll, nav = navigation }) => {
  const router = useRouter()

  const pref = router.asPath.split('/')[1] === 'en' ? '/en' : ''
  const active = router.asPath.split('/')[1] === 'en' ? router.asPath.split('/')[2] : router.asPath.split('/')[1]

  const initialSmoothStyles: string = active !== 'portfolio' ? 'smooth' : 'auto'
  const [smoothStyles, setSmoothStyles] = useState(initialSmoothStyles)

  const handlerClick = (styles: string) => {
    setSmoothStyles(styles)
  }

  return (
    <nav
      className={
        cn(
          styles.nav,
          scroll > 0 ? styles.scrollNav : ''
        )
      }
    >
      <Link href={pref + '/#services'}>
        <a
          className={
            cn(
              styles.item,
            )
          }
          onClick={()=>handlerClick('smooth')}
        >
          { nav[0] }
        </a>
      </Link>
      <Link href={pref + '/portfolio'}>
        <a
          className={
            cn(
              styles.item,
              active === 'portfolio' ? styles.active : ''
            )
          }
          onClick={()=>handlerClick('auto')}
        >
          { nav[1] }
        </a>
      </Link>
      <Link href={pref + '/#workflow'}>
        <a
          className={styles.item}
          onClick={()=>handlerClick('smooth')}
        >
          { nav[2] }
        </a>
      </Link>
      <Link href={pref + '/#technologies'}>
        <a
          className={styles.item}
          onClick={()=>handlerClick('smooth')}
        >
          { nav[3] }
        </a>
      </Link>
      <Link href={pref + '/#contacts'}>
        <a
          className={styles.item}
          onClick={()=>handlerClick('smooth')}
        >
          { nav[4] }
        </a>
      </Link>
      <style
        jsx
        global
      >
        {
          `
        html, body{ 
         scroll-behavior: ${smoothStyles}
        }
      `
        }
      </style>
    </nav>
  )
}