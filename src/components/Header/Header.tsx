import React, { useState } from 'react'
import cn from 'classnames'

import { Nav } from '../Nav/Nav'
import { Logo } from '../Logo/Logo'
import { MobileNav } from '../mobile/MobileNav/MobileNav'
import { Button } from './HeaderButton/HeaderButton'
import { RuEng } from '../RuEng/RuEng'

import styles from './Header.module.sass'


type OwnProps = {
  nav: string[]
  buttonText: string
  position?: {
    services: any
  }
}

const Header: React.FC<OwnProps> = ({ nav, buttonText }) => {
  const [scroll, setScroll] = useState(0)

  const [width, setWidth] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const handlerWidth = () => {
    setWidth(window.innerWidth)
  }

  React.useEffect(() => {
    handlerWidth()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handlerWidth)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handlerWidth)
    }
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
        <Nav
          scroll={scroll}
          nav={nav}
        />
        <MobileNav
          nav={nav}
          scroll={scroll}
        />
        {
          scroll > 0 ? <Button href='/#contacts' >{ buttonText }</Button> : ''
        }
        {
          scroll <= 0 && width >= 1000 ? <RuEng /> : ''
        }
      </div>
    </header>
  )
}


export default Header