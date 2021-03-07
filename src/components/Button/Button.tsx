import React, { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './Button.module.sass'


type OwnProps = {
  href?: string
  onClick?: () => void
  btnType?: 'primary' | 'outline'
  children: React.ReactNode
  name?: string
}


export const Button: React.FC<OwnProps> = ({ name, href, onClick, children, btnType = 'primary' }) => {
  const router = useRouter()

  if (!href) {
    return (
      <button
        onClick={onClick}
        name={name}
        className={
          cn(
            styles.button,
            btnType === 'outline' && styles.outline
          )
        }
      >
        { children }
      </button>
    )
  }

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        className={
          cn(
            styles.button,
            btnType === 'outline' && styles.outline
          )
        }
      >
        { children }
      </a>
    )
  }

  const nextActive = href.split('/')[1] === 'en' ? router.asPath.split('/')[2] : router.asPath.split('/')[1]
  const active = router.asPath.split('/')[1] === 'en' ? router.asPath.split('/')[2] : router.asPath.split('/')[1]

  const [smoothStyles, setSmoothStyles] = useState(active === 'portfolio' ? 'auto' : 'smooth')

  const handlerClick = () => {
    setSmoothStyles(nextActive === 'portfolio' ? 'auto' : 'smooth')
  }

  return (
    <>
      <Link href={href}>
        <a
          className={
            cn(
              styles.button,
              btnType === 'outline' && styles.outline
            )
          }
          onClick={handlerClick}
        >
          { children }
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
    </>
  )
}