import React from 'react'
import cn from 'classnames'

import { CommonBlockProps } from '../../../store/lang/indexlang'
import { useCheckSupportWebp } from '../../../hooks/useCheckSupportWebp'

import styles from './Block1.module.sass'


const webpBg = require('src/common/images/webp/portfolio/portfolio.webp')
const bg = require('src/common/images/portfolioPage/portfolioBg.png')


export const Block1: React.FC<CommonBlockProps> = (props) => {
  const isSupport = useCheckSupportWebp()

  return (
    <div
      id='top'
      className={
        cn(
          styles.main,
        )
      }
      style={
        { backgroundImage: isSupport !== null ? `url(${isSupport ? webpBg : bg})` : '' }
      }
    >
      <div className={styles.wrapperBlock}>
        <h1 className={styles.mainTitle}>{ props.title }</h1>
      </div>
    </div>
  )
}