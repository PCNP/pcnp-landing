import React from 'react'

import { CommonBlockProps } from '../../store/lang/indexlang'

import styles from './ContactBlock.module.sass'


export const ContactBlock: React.FC<CommonBlockProps> = (props) => {
  return (
    <div
      className={styles.main}
      id='contacts'
    >
      <p className={styles.backgroundText}>
        contact us
      </p>
      <div className={styles.content}>
        <h2 className={styles.mainTitle}>{ props && props.title }</h2>

      </div>
    </div>
  )
}