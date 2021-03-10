import React, { useState } from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './Nav.module.sass'


const Scroll   = require('react-scroll')


const { scroller } = Scroll


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

  const [pref, setPref] = React.useState(router.asPath.split('/')[1] === 'en' ? '/en' : '')
  const [active, setActive] = React.useState(router.asPath.split('/')[1] === 'en' ?
    router.asPath.split('/')[2] : router.asPath.split('/')[1])

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

    setPref(router.asPath.split('/')[1] === 'en' ? '/en' : '')
    setActive(router.asPath.split('/')[1] === 'en' ?
      router.asPath.split('/')[2] : router.asPath.split('/')[1])

    setPageY(window.pageYOffset)
  }, [router.asPath])

  return (
    <nav
      className={
        cn(
          styles.nav,
          scroll > 0 ? styles.scrollNav : ''
        )
      }
    >
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
          async () => {
            if(active === 'portfolio'){
              await router.push(pref + '/')
              scroller.scrollTo('services', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
            else{
              scroller.scrollTo('services', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
          }
        }
      >
        { nav[0] }
      </a>
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
          async () => {
            return router.push(pref + '/portfolio')
          }
        }
      >
        { nav[1] }
      </a>
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
          async () => {
            if(active === 'portfolio'){
              await router.push(pref + '/')
              scroller.scrollTo('workflow', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
            else{
              scroller.scrollTo('workflow', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
          }
        }
      >
        { nav[2] }
      </a>
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
          async () => {
            if(active === 'portfolio'){
              await router.push(pref + '/')
              scroller.scrollTo('technologies', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
            else{
              scroller.scrollTo('technologies', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
          }
        }
      >
        { nav[3] }
      </a>
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
          async () => {
            if(active === 'portfolio'){
              await router.push(pref + '/')
              scroller.scrollTo('contacts', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
            else{
              scroller.scrollTo('contacts', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
          }
        }
      >
        { nav[4] }
      </a>
    </nav>
  )
}