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
  scroll: number
}

const navigation = [
  'Услуги',
  'Портфолио',
  'Как мы работаем',
  'Наши технологии',
  'Контакты',
]


export const MobileNav: React.FC<OwnProps> = ({ scroll, nav = navigation }) => {
  const router = useRouter()

  const pref = router.asPath.split('/')[1] === 'en' ? '/en' : ''
  const active = router.asPath.split('/')[1] === 'en' ? router.asPath.split('/')[2] : router.asPath.split('/')[1]

  const initialSmoothStyles: string = active !== 'portfolio' ? 'smooth' : 'auto'
  const [smoothStyles, setSmoothStyles] = useState(initialSmoothStyles)

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
    const contactsElement = document.getElementById('contacts')
    const techElement = document.getElementById('technologies')
    const portfolioElement = document.getElementById('portfolio')
    const workFlowElement = document.getElementById('workflow')
    const servicesElement = document.getElementById('services')

    if(contactsElement && techElement && workFlowElement && portfolioElement && servicesElement){
      const contacts: any = contactsElement.getBoundingClientRect()
      const technologies: any = techElement.getBoundingClientRect()
      const workFlow: any = workFlowElement.getBoundingClientRect()
      const portfolio: any = portfolioElement.getBoundingClientRect()
      const services: any = servicesElement.getBoundingClientRect()

      setPosition({
        services,
        portfolio,
        workFlow,
        technologies,
        contacts,
      })
    }

    setPageY(window.pageYOffset)

    setSmoothStyles(active !== 'portfolio' ? 'smooth' : 'auto')
  }, [active])

  const handlerButton = () => {
    return router.push('/#contacts')
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
              onClick={
                ()=>{
                  setIsOpen(false)
                }
              }
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
              onClick={
                ()=>{
                  setSmoothStyles('auto')
                  setIsOpen(false)
                }
              }
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
              onClick={
                ()=>{
                  setIsOpen(false)
                }
              }
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
              onClick={
                ()=>{
                  setIsOpen(false)
                }
              }
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
              onClick={
                ()=>{
                  setIsOpen(false)
                }
              }
            >
              { nav[4] }
            </a>
          </Link>
          <div className={styles.buttonsBlock}>
            <RuEng />
            <Button
              onClick={handlerButton}
              btnType='outline'
              name='email'
            >
              <img src={icon} />
            </Button>
          </div>
        </div>
      </nav>
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