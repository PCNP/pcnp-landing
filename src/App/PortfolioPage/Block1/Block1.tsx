import React from 'react'

import styles from './Block1.module.sass'


export const Block1: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapperBlock}>
        <h1 className={styles.mainTitle}>Портфолио</h1>
      </div>
    </div>
  )
}