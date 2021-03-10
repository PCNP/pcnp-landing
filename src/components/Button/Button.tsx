import React from 'react'
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
  if (!href) {
    return (
      <button
        onClick={onClick}
        name={name}
        aria-label={name}
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

  const router = useRouter()

  const pref = router.asPath.split('/')[1] === 'en' ? '/en' : ''

  if (href.startsWith('http')) {
    return (
      <a
        href={pref + href}
        className={
          cn(
            styles.button,
            btnType === 'outline' && styles.outline
          )
        }
        onClick={onClick}
      >
        { children }
      </a>
    )
  }

  return (
    <>
      <Link href={pref + href}>
        <a
          className={
            cn(
              styles.button,
              btnType === 'outline' && styles.outline
            )
          }
          onClick={onClick}
        >
          { children }
        </a>
      </Link>
    </>
  )
}