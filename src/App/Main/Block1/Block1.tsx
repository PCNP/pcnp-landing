import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { scroller } from 'react-scroll/modules'

import { Button } from '../../../components/Button/Button'
import { CommonBlockProps } from '../../../store/lang/indexlang'

import styles from './Block1.module.sass'


const webpBg = require('src/common/images/webp/index/block1.webp')
const bg = require('src/common/images/index/background_1.png')


type OwnProps = {
  support: boolean
}


export const Block1: React.FC<CommonBlockProps & OwnProps> = (props) => {
  const [isLoad, setIsLoad] = useState(false)

  const handlerLoad = () => {
    setIsLoad(true)
  }

  useEffect(()=>{
    window.addEventListener('load', handlerLoad)
    return () => {
      window.removeEventListener('load', handlerLoad)
    }
  },[])
  return (
    <div
      id='top'
      className={
        cn(
          styles.main,
        )
      }
      style={
        { backgroundImage: isLoad ? `url(${props.support ? webpBg : bg})` : '' }
      }
    >
      <div className={styles.content}>
        <h1 className={styles.blockTitle}>
          { props.title }
        </h1>
        <p className={styles.slogan}>
          { props.slogan }
        </p>
        <Button
          href='/'
          onClick={
            ()=>{
              scroller.scrollTo('contacts', {
                duration: 600,
                delay: 0,
                smooth: 'easeInOutQuint',
              })
            }
          }
        >
          { props.button }
        </Button>
      </div>
    </div>
  )
}
