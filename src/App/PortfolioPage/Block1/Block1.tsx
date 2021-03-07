import React from 'react'
import cn from 'classnames'
import { useWebPSupportCheck } from 'react-use-webp-support-check/dist'

import { CommonBlockProps } from '../../../store/lang/indexlang'

import styles from './Block1.module.sass'


export const Block1: React.FC<CommonBlockProps> = (props) => {
  const supportsWebP = useWebPSupportCheck()
  return (
    <div
      className={
        cn(
          styles.main,
          supportsWebP ? styles.webpBg : styles.bg
        )
      }
    >
      <div className={styles.wrapperBlock}>
        <h1 className={styles.mainTitle}>{ props.title }</h1>
      </div>
    </div>
  )
}