import React from 'react'

import { Button } from '../../../components/Button/Button'
import { CommonBlockProps } from '../../../store/lang/indexlang'

import styles from './Block1.module.sass'


export const Block1: React.FC<CommonBlockProps> = (props) => {
  return (
    <div className={styles.main}>
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
