import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { useWebPSupportCheck } from 'react-use-webp-support-check/dist'

import { CommonBlockProps } from '../../../store/lang/indexlang'

import styles from './Block1.module.sass'


const webpBg = require('src/common/images/webp/portfolio/portfolio.webp')
const bg = require('src/common/images/portfolioPage/portfolioBg.png')


export const Block1: React.FC<CommonBlockProps> = (props) => {
  const supportsWebP = useWebPSupportCheck()

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
        { backgroundImage: isLoad ? `url(${supportsWebP ? webpBg : bg})` : '' }
      }
    >
      <div className={styles.wrapperBlock}>
        <h1 className={styles.mainTitle}>{ props.title }</h1>
      </div>
    </div>
  )
}