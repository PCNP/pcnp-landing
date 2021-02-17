import React, { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './MobileNav.module.sass'


const openMenuIcon = require('src/common/images/menu/openMenuIcon.png')
const closeMenuIcon = require('src/common/images/menu/closeMenuIcon.png')


export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className={styles.iconsBlock}
        onClick={()=>setIsOpen(!isOpen)}
      >
        <img src={isOpen ? openMenuIcon : closeMenuIcon} />
      </div>
      <nav
        className={
          cn(
            styles.nav,
            isOpen ? styles.openedNav : ''
          )
        }
      >
        <Link href='/'><a>Услуги</a></Link>
        <Link href='/'><a>Портфолио</a></Link>
        <Link href='/'><a>Как мы работаем</a></Link>
        <Link href='/'><a>Технологии</a></Link>
        <Link href='/'><a>Команда</a></Link>
        <Link href='/'><a>Контакты</a></Link>
      </nav>
    </>
  )
}