import React from 'react'

import { MyForm } from '../../../components/MyForm/MyForm'

import styles from './ContactBlock.module.sass'


export const ContactBlock: React.FC = () => {
  return (
    <div className={styles.main}>
      <p className={styles.backgroundText}>
        contact us
      </p>
      <div className={styles.content}>
        <h2 className={styles.mainTitle}>СВЯЖИТЕСЬ С НАМИ!</h2>
        <MyForm />
      </div>
    </div>
  )
}