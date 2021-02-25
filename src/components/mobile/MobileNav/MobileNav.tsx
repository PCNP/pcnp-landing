import React, { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Button } from '../../Button/Button'
import { RuEng } from '../../RuEng/RuEng'

import styles from './MobileNav.module.sass'


const icon = require('src/common/images/icons/mail.png')
const openMenuIcon = require('src/common/images/menu/openMenuIcon.png')
const closeMenuIcon = require('src/common/images/menu/closeMenuIcon.png')


type OwnProps = {
  nav: string[]
}


export const MobileNav: React.FC<OwnProps> = ({ nav }) => {
  const handlerButton = () => {

  }
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
        <div className={styles.wrapperBlock}>
          <Link href='/'><a>{ nav[0] }</a></Link>
          <Link href='/portfolio'><a className={styles.item}>{ nav[1] }</a></Link>
          <Link href='/'><a>{ nav[2] }</a></Link>
          <Link href='/'><a>{ nav[3] }</a></Link>
          <Link href='/'><a>{ nav[4] }</a></Link>
          <Link href='/'><a>{ nav[5] }</a></Link>
          <div className={styles.buttonsBlock}>
            <RuEng />
            <Button
              onClick={handlerButton}
              btnType='outline'
            >
              <img src={icon} />
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}