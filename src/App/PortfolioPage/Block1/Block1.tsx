import React from 'react'

import { CommonBlockProps } from '../../../store/lang/indexlang'

import styles from './Block1.module.sass'


export const Block1: React.FC<CommonBlockProps> = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapperBlock}>
        <h1 className={styles.mainTitle}>{ props.title }</h1>
      </div>
    </div>
  )
}