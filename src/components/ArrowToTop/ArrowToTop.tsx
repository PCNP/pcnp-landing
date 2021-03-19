import React, { useEffect, useRef, useState } from 'react'
import { animateScroll } from 'react-scroll'
import cn from 'classnames'
import { useRouter } from 'next/router'

import { LeftArrow } from '../icons/LeftArrow'

import styles from './ArrowToTop.module.sass'


export const ArrowToTop: React.FC = () => {
  const router = useRouter()

  const [isShowButton, setIsShowButton] = useState(false)

  const [isFooterPosition, setIsFooterPosition] = useState(false)

  const scroll = useRef(0)

  const footer = useRef({
    height: 0,
    top: 0,
  })

  useEffect(() => {
    scroll.current = window.scrollY

    const handlerScroll = () => {
      const delta = scroll.current === 0 ? 1 : window.scrollY - scroll.current >= 0
      setIsShowButton(() =>{
        return delta && window.scrollY > window.innerHeight * 0.8
      })
      setIsFooterPosition(() => {
        return window.scrollY > footer.current.top - window.innerHeight
      })
      scroll.current = window.scrollY
    }

    const handlerSize = () => {
      const el = document.getElementById('footer')
      const scr = window.scrollY
      if(el) {
        footer.current = {
          top: el.getBoundingClientRect().top + scr,
          height: el.getBoundingClientRect().height,
        }
      }
    }

    window.addEventListener('scroll', handlerScroll)
    window.addEventListener('resize', handlerSize)

    return () => {
      window.removeEventListener('scroll', handlerScroll)
      window.removeEventListener('resize', handlerSize)
    }
  }, [])

  useEffect(()=>{
    const el = document.getElementById('footer')
    const scr = window.scrollY
    if(el) {
      footer.current = {
        top: el.getBoundingClientRect().top + scr,
        height: el.getBoundingClientRect().height,
      }
    }
  },[router.asPath])

  return (
    <div
      className={
        cn(
          styles.circle,
          isShowButton ? styles.block : styles.none,
        )
      }
      style={
        isFooterPosition ? {
          position: 'absolute',
          bottom: `${footer.current.height + 20}px`,
        } : {}
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