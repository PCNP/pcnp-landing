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

  const [position, setPosition] = React.useState({
    services: {
      top: 0,
      height: 0,
    },
    portfolio: {
      top: 0,
      height: 0,
    },
    workFlow: {
      top: 0,
      height: 0,
    },
    technologies: {
      top: 0,
      height: 0,
    },
    contacts: {
      top: 0,
      height: 0,
    },
  })

  const [pageY, setPageY] = useState(0)

  React.useEffect(()=>{
    // @ts-ignore
    const contacts: any = document.getElementById('contacts').getBoundingClientRect()
    // @ts-ignore
    const technologies: any = document.getElementById('technologies').getBoundingClientRect()
    // @ts-ignore
    const workFlow: any = document.getElementById('workflow').getBoundingClientRect()
    // @ts-ignore
    const portfolio: any = document.getElementById('portfolio').getBoundingClientRect()
    // @ts-ignore
    const services: any = document.getElementById('services').getBoundingClientRect()
    setPosition({
      services,
      portfolio,
      workFlow,
      technologies,
      contacts,
    })
    setPageY(window.pageYOffset)
  }, [])

  React.useEffect(()=>{
    setSmoothStyles(active !== 'portfolio' ? 'smooth' : 'auto')
  }, [active])

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
              active !== 'portfolio' && scroll >= position.services.top + pageY &&
              scroll < position.services.top + pageY + position.services.height * 0.75 ?
                styles.active : ''
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
              active === 'portfolio' ? styles.active : scroll >= position.portfolio.top + pageY &&
              scroll < position.portfolio.top + pageY + position.portfolio.height * 0.75 ?
                styles.active : ''
            )
          }
          onClick={()=>handlerClick('auto')}
        >
          { nav[1] }
        </a>
      </Link>
      <Link href={pref + '/#workflow'}>
        <a
          className={
            cn(
              styles.item,
              active !== 'portfolio' && scroll >= position.workFlow.top + pageY &&
              scroll < position.workFlow.top + pageY + position.workFlow.height * 0.75 ?
                styles.active : ''
            )
          }
          onClick={()=>handlerClick('smooth')}
        >
          { nav[2] }
        </a>
      </Link>
      <Link href={pref + '/#technologies'}>
        <a
          className={
            cn(
              styles.item,
              active !== 'portfolio' && scroll >= position.technologies.top + pageY &&
              scroll < position.technologies.top + pageY + position.technologies.height * 0.75 ?
                styles.active : ''
            )
          }
          onClick={()=>handlerClick('smooth')}
        >
          { nav[3] }
        </a>
      </Link>
      <Link href={pref + '/#contacts'}>
        <a
          className={
            cn(
              styles.item,
              active !== 'portfolio' && scroll >= position.contacts.top + pageY &&
              scroll < position.contacts.top + pageY + position.contacts.height * 0.75 ?
                styles.active : ''
            )
          }
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