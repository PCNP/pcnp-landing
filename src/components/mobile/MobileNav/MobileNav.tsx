import React, { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'

import { Button } from '../../Button/Button'
import { RuEng } from '../../RuEng/RuEng'

import styles from './MobileNav.module.sass'


const icon = require('src/common/images/icons/mail.svg')
const openMenuIcon = require('src/common/images/menu/openMenuIcon.svg')
const closeMenuIcon = require('src/common/images/menu/closeMenuIcon.svg')


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


export const MobileNav: React.FC<OwnProps> = ({ nav = navigation }) => {
  const router = useRouter()
  const pref = router.asPath.split('/')[1] === 'en' ? '/en' : ''

  const handlerButton = () => {

  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className={
          cn(
            styles.iconsBlock,
            isOpen ? styles.openIcon : ''
          )
        }
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
          <Link href={pref + '/#services'}><a onClick={()=>setIsOpen(false)}>{ nav[0] }</a></Link>
          <Link href={pref + '/portfolio'}><a onClick={()=>setIsOpen(false)}>{ nav[1] }</a></Link>
          <Link href={pref + '/#workflow'}><a onClick={()=>setIsOpen(false)}>{ nav[2] }</a></Link>
          <Link href={pref + '/#technologies'}><a onClick={()=>setIsOpen(false)}>{ nav[3] }</a></Link>
          <Link href={pref + '/#contacts'}><a onClick={()=>setIsOpen(false)}>{ nav[4] }</a></Link>
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