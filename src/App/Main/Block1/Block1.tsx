import React from 'react'
import cn from 'classnames'
import { useWebPSupportCheck } from 'react-use-webp-support-check'

import { Button } from '../../../components/Button/Button'
import { CommonBlockProps } from '../../../store/lang/indexlang'

import styles from './Block1.module.sass'


const webpBg = require('src/common/images/webp/index/block1.webp')
const bg = require('src/common/images/index/background_1.png')


export const Block1: React.FC<CommonBlockProps> = (props) => {
  const isSupport = useWebPSupportCheck()
  return (
    <div
      className={
        cn(
          styles.main,
        )
      }
      style={
        { backgroundImage: `url(${isSupport ? webpBg : bg})` }
      }
    >
      <div className={styles.content}>
        <h1 className={styles.blockTitle}>
          { props.title }
        </h1>
        <p className={styles.slogan}>
          { props.slogan }
        </p>
        <Button href='/#contacts'>{ props.button }</Button>
      </div>
    </div>
  )
}
