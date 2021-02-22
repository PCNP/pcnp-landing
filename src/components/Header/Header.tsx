import React, { useState } from 'react'
import cn from 'classnames'

import { Nav } from '../Nav/Nav'
import { Logo } from '../Logo/Logo'
import { MobileNav } from '../mobile/MobileNav/MobileNav'
import { Button } from './HeaderButton/HeaderButton'
import { RuEng } from '../RuEng/RuEng'

import styles from './Header.module.sass'


export const Header: React.FC = () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={
        cn(
          styles.header,
          scroll > 0 ? styles.headerScroll : ''
        )
      }
    >
      <div className={styles.wrapperBlock}>
        <Logo />
        <Nav scroll={scroll} />
        <MobileNav />
        {
          scroll > 0 ? <Button href='/'>Начать проект</Button> : ''
        }
        {
          scroll <= 0 ? <RuEng /> : ''
        }
      </div>
    </header>
  )
}
