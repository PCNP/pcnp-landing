import React from 'react'

import { commonBlockProps } from '../../store/lang/indexlang'

import styles from './ContactBlock.module.sass'


type OwnProps = {
  lang?: commonBlockProps
}

export const ContactBlock: React.FC<OwnProps> = ({ lang }) => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        contact us
      </p>
      <div className={styles.content}>
        <h2 className={styles.mainTitle}>{ lang && lang.title || 'Свяжитесь с нами' }</h2>

      </div>
    </div>
  )
}