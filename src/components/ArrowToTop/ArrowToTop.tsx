import React, { useCallback, useState } from 'react'
import { animateScroll } from 'react-scroll'
import cn from 'classnames'

import { LeftArrow } from '../icons/LeftArrow'

import styles from './ArrowToTop.module.sass'


export const ArrowToTop: React.FC = () => {
  const [scroll, setScroll] = useState(0)

  const [isShowButton, setIsShowButton] = useState(false)

  const [height, setHeight] = useState(0)

  const [footer, setFooter] = useState({
    height: 0,
    top: 0,
  })

  const [pageY, setPageY] = useState(0)

  const handlerScroll = useCallback(() => {
    setIsShowButton(window.scrollY - scroll > 0 && window.scrollY > height * 0.8)
    setScroll(window.scrollY)
  },[scroll, height])

  const handlerHeight = useCallback(() => {
    setHeight(window.innerHeight)
    setPageY(window.pageYOffset)
    const footer = document.getElementById('footer')
    if(footer){
      setFooter(footer.getBoundingClientRect())
    }
  }, [])

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
    return () => {
      window.removeEventListener('scroll', handlerScroll)
      window.removeEventListener('resize', handlerHeight)
    }
  }, [handlerScroll, handlerHeight])

  return (
    <div
      className={
        cn(
          styles.circle,
          isShowButton ? styles.block : styles.none,
        )
      }
      style={
        scroll > footer.top + pageY - height ? {
          position: 'absolute',
          bottom: `${footer.height + 20}px`,
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