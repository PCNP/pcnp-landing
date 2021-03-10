import React, { useState } from 'react'
import { animateScroll } from 'react-scroll'
import cn from 'classnames'

import { LeftArrow } from '../icons/LeftArrow'

import styles from './ArrowToTop.module.sass'


export const ArrowToTop: React.FC = () => {
  const [scroll, setScroll] = useState(0)

  const [height, setHeight] = useState(0)

  const handlerScroll = () => {
    setScroll(window.scrollY)
  }

  const handlerHeight = () => {
    setHeight(window.innerWidth)
  }

  React.useEffect(() => {
    setHeight(window.innerHeight)
    window.addEventListener('scroll', handlerScroll)
    window.addEventListener('resize', handlerHeight)
    return () => {
      window.removeEventListener('scroll', handlerScroll)
      window.removeEventListener('resize', handlerHeight)
    }
  }, [])

  return (
    <div
      className={
        cn(
          styles.circle,
          scroll > height * 0.8 ? styles.block : styles.none
        )
      }
      onClick={
        ()=>{
          animateScroll.scrollToTop()
        }
      }
    >
      <LeftArrow />
    </div>
  )
}