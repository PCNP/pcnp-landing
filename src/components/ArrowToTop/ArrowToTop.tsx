import React, { useState } from 'react'
import { animateScroll } from 'react-scroll'
import cn from 'classnames'

import { LeftArrow } from '../icons/LeftArrow'

import styles from './ArrowToTop.module.sass'


export const ArrowToTop: React.FC = () => {
  const [scroll, setScroll] = useState(0)

  const [delta, setDelta] = useState(0)

  const [height, setHeight] = useState(0)

  const [footer, setFooter] = useState({
    height: 0,
    top: 0,
  })

  const [pageY, setPageY] = useState(0)

  const handlerWheel = (event: Event & WheelEvent) => {
    setDelta(event.deltaY)
  }

  const handlerScroll = () => {
    setScroll(window.scrollY)
  }

  const handlerHeight = () => {
    setHeight(window.innerWidth)
    setPageY(window.pageYOffset)
    const footer = document.getElementById('footer')
    if(footer){
      setFooter(footer.getBoundingClientRect())
    }
  }

  React.useEffect(() => {
    const footer = document.getElementById('footer')

    if(footer){
      setFooter(footer.getBoundingClientRect())
    }

    setPageY(window.pageYOffset)

    setScroll(window.scrollY)
    setHeight(window.innerHeight)
    window.addEventListener('scroll', handlerScroll)
    window.addEventListener('resize', handlerHeight)
    window.addEventListener('wheel', handlerWheel)
    return () => {
      window.removeEventListener('scroll', handlerScroll)
      window.removeEventListener('resize', handlerHeight)
      window.removeEventListener('wheel', handlerWheel)
    }
  }, [])

  return (
    <div
      className={
        cn(
          styles.circle,
          scroll > height * 0.8 && delta >= 0 ? styles.block : styles.none,
          scroll > footer.top + pageY - height && styles.bottom
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