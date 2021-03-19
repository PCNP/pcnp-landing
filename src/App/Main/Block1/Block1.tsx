import React from 'react'
import cn from 'classnames'
import { scroller } from 'react-scroll/modules'

import { Button } from '../../../components/Button/Button'
import { CommonBlockProps } from '../../../store/lang/indexlang'
import { useCheckSupportWebp } from '../../../hooks/useCheckSupportWebp'

import styles from './Block1.module.sass'


const webpBg = require('src/common/images/webp/index/block1.webp')
const bg = require('src/common/images/index/background_1.png')


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
