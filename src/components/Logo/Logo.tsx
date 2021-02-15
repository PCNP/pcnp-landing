import React from 'react'

import styles from './Logo.module.sass'


export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <p className={styles.blurLogo}>PCNP</p>
      PCNP
    </div>
  )
}
